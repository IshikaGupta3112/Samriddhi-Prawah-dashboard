import react ,{useState}from 'react';
import DataTable from 'react-data-table-component';
import '../layouts/Table.css';
import change from '../assets/img/change.svg';
import eye from '../assets/img/eye.svg';
import { Dialog , DialogTitle, Box,DialogContent , DialogActions, DialogContentText
} from '@material-ui/core';
import { collectorData } from 'redux/actions/CollectorActions';
import { tableCustomStyles } from './CustomStyles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import back from '../assets/img/back.svg'
import forward from '../assets/img/forward.svg'
import { collectorList } from 'redux/actions/CollectorActions';

function Collector(){

const [check , setCheck] = useState(0);
const [check2 , setCheck2] = useState(0);
const[loading , setLoading] = useState(true);
const[list1 , setList1] = useState();
const [object , setObject] = useState();
const [n , setN] = useState(1);
const [pages , setPages] = useState();

const mssg = useSelector((state)=>state.collectorReducer);
console.log(mssg);

useEffect(()=>{
  console.log(n);
  setCheck(0);
  setLoading(true);
  dispatch(collectorList(n, setCheck ,setLoading ));
  if(n===1){
     document.getElementById('backimg').style.display='none'; 
     document.getElementById('frontimg').style.display='block'; 
    }
    else if(n===pages){
      document.getElementById('frontimg').style.display='none'; 
      document.getElementById('backimg').style.display='block'; 
    }
    else{
      document.getElementById('backimg').style.display='block'; 
      document.getElementById('frontimg').style.display='block'; 
    }
  } , [n])

useEffect(()=>{
    console.log(check);
    if(check2==1){
    toast.success(mssg.response2, {
        position: toast.POSITION.TOP_RIGHT
    });
    var userMail=localStorage.getItem("userMail");
    const object=list1.find(obj => obj.email === userMail);
    if(object.role!='USER'){
    object.role="USER"
    }
    else{
        object.role="COLLECTOR"
    }
  }
} ,[check2]);

const list =useSelector((s)=>s.collectorReducer);
console.log(list);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(collectorList(n, setCheck,setLoading));
    },[])

    useEffect(()=>{
      if(check==1){
     console.log(list.users);
     setList1(list.users);
     setPages(list.pages);
     if(list.pages===1){
      document.getElementById('navigationDiv').style.display='none'
     }
      }
      },[check])
  
  const columns =[
    {
      name:"Student's Name",
      selector:(data)=>data.name
    },

    {
      name:"POR",
      selector:(data)=>data.POR
    },
    {
        name:"Role",
        selector:(data)=>data.role
      },
    {
        name:"Change Role",
        cell:(row)=><><img src={change} onClick={role} id={row.email} className='tickimg'/></>
      },

    {
        name:"Year",
        selector:(data)=>data.year
      },
    {
      name:"Details",
      cell:(row)=>
      <>
      <img src={eye} id={row._id} className='viewEye' onClick={view} />
    </>
    },
  ]
  function backFunc(){
    setN(n-1);
  }
  function forwardFunc(){
    console.log(pages);
  if(n<pages){
  setN(n+1);
  }
  else{
    document.getElementById('frontimg').style.display='none';
  }
  }
  function role(e){
    setCheck2(0);
    setLoading(true);
    console.log('approved');
    console.log(e.target.id);
    localStorage.setItem("userMail" , e.target.id);
    const fd={
        email:e.target.id
       } 
       dispatch(collectorData(fd , setCheck2 , setLoading));
  }
  function view(e){
   setShowDialog2(true);
   console.log(e.target.id);
   localStorage.setItem("collectorId" , e.target.id);
  var collectorId = localStorage.getItem("collectorId");
  setObject(list1.find(obj => obj._id === collectorId));
   console.log(object);
  }

  const[showDialog2 , setShowDialog2] = useState(false);

  const closeDialog2 = () => setShowDialog2 (false);

return(<>
 {loading?<div id='loader2'><ReactBootStrap.Spinner animation="border" id="spinner2"/></div>:null}

<Dialog open={showDialog2} onClose={closeDialog2}>
<DialogTitle>Student's Details</DialogTitle>
<DialogContent>
  <DialogContentText>
{(object)?
  <pre>
  <span style={{fontWeight:"bold"}}>Email                           : </span><span>{object.email}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Course                        : </span><span>{object.course}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Branch                        : </span><span>{object.branch}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Phone No.                  : </span><span>{object.phone_no}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Student's No              : </span><span>{object.student_no}</span>
  <br></br>
   </pre>:null}
    
  </DialogContentText>
</DialogContent>
</Dialog>
  <DataTable columns={columns} data={list1} customStyles={tableCustomStyles} 
  />
    <div id='navigationDiv' style={{backgroundColor:"white", position: 'fixed' , bottom:'0' , width:'79.9vw' , display:'flex' , justifyContent:"right"  , padding:'6px 20px 6px 0'}}>
<><img style={{cursor:'pointer'}} id='backimg' onClick={backFunc} src={back} /><pre>   </pre><img style={{cursor:'pointer'}} onClick={forwardFunc} id='frontimg' src={forward}></img></>
  </div>
<ToastContainer /> 
</>)
}
export default Collector;


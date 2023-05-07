import react ,{useState}from 'react';
import DataTable from 'react-data-table-component';
import '../layouts/Table.css';
import tick from '../assets/img/tick.svg';
import cross from '../assets/img/cross.svg'
import { Dialog , DialogTitle, Box,DialogContent , DialogActions, DialogContentText
} from '@material-ui/core';
import { tableCustomStyles } from './CustomStyles';
import { useDispatch } from 'react-redux';
import { itemData } from 'redux/actions/ItemsAction';
import { useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { approveData } from 'redux/actions/ItemsAction';

function Table(){

const [check , setCheck] = useState(0);
const [check2 , setCheck2] = useState(0);
const[loading , setLoading] = useState(false);
const[list1 , setList1] = useState();
const [object , setObject] = useState();

const list =useSelector((s)=>s.itemReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(itemData(setLoading , setCheck ));
    },[])

    useEffect(()=>{
      if(check==1){
     console.log(list.items);
     setList1(list.items);
      }
      },[check])
  
  const columns =[
    {
      name:"Product Name",
      selector:(data)=>data.name
    },
    // {
    //   name:"Description",
    //   selector:(data)=>data.description
    // },
    {
      name:"Image",
      selector:(data)=><img src={data.images[0]} id={data._id} className='tvimg' onClick={imgClick}/>
    },
    {
      name:"Action",
      cell:(row)=><><img src={tick} onClick={approve} id={row._id} className='tickimg'/><img src={cross} onClick={disapprove} id={row._id} className='tickimg'/></>
    },
    {
      name:"Student's Details",
      cell:(row)=>
      <>
      <button id={row._id} className='viewBtn' onClick={view}>View</button>
    </>
    },
  ]

  function approve(e){
    console.log('approved');
    console.log(e.target.id);
    localStorage.setItem("productId2" , e.target.id);
    setCheck2(0);
   const fd={
      status:"APPROVED"
    } 
    dispatch(approveData(fd));
  }
  function disapprove(e){
    console.log('disapproved');
    console.log(e.target.id);
    localStorage.setItem("productId2" , e.target.id);
  }

// var productId = localStorage.getItem("productId");
// var object;
// const object = list.items.find(obj => obj._id === productId);

  function view(e){
   setShowDialog2(true);
   console.log(e.target.id);
   localStorage.setItem("productId" , e.target.id);
  //  object = list.items.find(obj => obj._id === productId);
  var productId = localStorage.getItem("productId");
  setObject(list1.find(obj => obj._id === productId));
   console.log(object);
  }

  const[showDialog , setShowDialog] = useState(false);
  const[showDialog2 , setShowDialog2] = useState(false);

  const closeDialog = () => setShowDialog (false);
  const closeDialog2 = () => setShowDialog2 (false);

  function imgClick(e){
    setShowDialog(true);
    console.log(e.target.id);
    localStorage.setItem("productId" , e.target.id);
    var productId = localStorage.getItem("productId");
    // object = list.items.find(obj => obj._id === productId);
    setObject(list1.find(obj => obj._id === productId));
  }

return(<>
{loading?<div id='loader2'><ReactBootStrap.Spinner animation="border" id="spinner2"/></div>:null}
<Dialog open={showDialog} onClose={closeDialog}>
  {object?<Carousel showThumbs={false} useKeyboardArrows={true}>
        {object?object.images.map((URL) => (
          <div className='slide'>
            <img alt="sample_file" src={URL} style={{marginBottom:'0px'}}/>
          </div>
          // </div>
        )):null}
      </Carousel>:null}
</Dialog>
<Dialog open={showDialog2} onClose={closeDialog2}>
<DialogTitle>Student's Details</DialogTitle>
<DialogContent>
  <DialogContentText>
 {(object)?
  <pre>
  <span style={{fontWeight:"bold"}}>Student's Name        : </span><span>{object.user.name}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Email                           : </span><span>{object.user.email}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Course                        : </span><span>{object.user.course}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Branch                        : </span><span>{object.user.branch}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Year                             : </span><span>{object.user.year}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Phone No.                  : </span><span>{object.user.phone_no}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Student's No              : </span><span>{object.user.student_no}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Place of Residence   : </span><span>{object.user.POR}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Date Of Donation      : </span><span>{}</span>
  <br></br>
  <span style={{fontWeight:"bold"}}>Time of Donation      : </span><span>{}</span>
  </pre>:null}
   
  </DialogContentText>
</DialogContent>
</Dialog>
<DataTable columns={columns} data={list1} pagination customStyles={tableCustomStyles}/>
</>)
}
export default Table;


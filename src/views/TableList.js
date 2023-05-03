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

function Table(){

const [check , setCheck] = useState(0);
const[loading , setLoading] = useState(true);
const[list1 , setList1] = useState();
const[imgList , setImgList] = useState();

const list =useSelector((s)=>s.itemReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(itemData(setLoading , setCheck));
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
      cell:(row)=><><img src={tick} onClick={approve} id='tickimg'/><img src={cross} onClick={disapprove} id='tickimg'/></>
    },
    {
      name:"Student's Details",
      cell:(row)=>
      <>
      <button id={row._id} className='viewBtn' onClick={view}>View</button>
    </>
    },
  ]

  function approve(){
    console.log('approved');
  }
  function disapprove(){
    console.log('disapproved');
  }

  var productId = localStorage.getItem("productId");
  const object =list.items.find(obj => obj._id === productId)
// var object;
  console.log(object);
  console.log(object.images);

  function view(e){
   setShowDialog2(true);
   console.log(e.target.id);
   localStorage.setItem("productId" , e.target.id);
  }

  var imgSrc = localStorage.getItem("dialogImage");
  const[showDialog , setShowDialog] = useState(false);
  const[showDialog2 , setShowDialog2] = useState(false);

  const closeDialog = () => setShowDialog (false);
  const closeDialog2 = () => setShowDialog2 (false);

  function imgClick(e){
    setShowDialog(true);
    console.log(e.target.id);
    localStorage.setItem("productId" , e.target.id);
  }


return(<>
{loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
<Dialog open={showDialog} onClose={closeDialog}>
  {object?<Carousel showThumbs={false} useKeyboardArrows={true}>
        {object.images.map((URL) => (
          <div>
            <img alt="sample_file" src={URL} style={{marginBottom:'0px'}}/>
          </div>
          // </div>
        ))}
      </Carousel>:null}
{/* <Box>
  <img src={imgSrc} width='100%'></img>
</Box> */}
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


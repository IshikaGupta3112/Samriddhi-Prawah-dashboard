import react ,{useState}from 'react';
import DataTable from 'react-data-table-component';
import '../layouts/Table.css';
import { tableCustomStyles } from './CustomStyles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { donorList } from 'redux/actions/CollectorActions';

function Donor(){

const [check , setCheck] = useState(0);
const[loading , setLoading] = useState(true);
const[list1 , setList1] = useState();

const list =useSelector((s)=>s.collectorReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(donorList(setLoading , setCheck));
    },[])

    useEffect(()=>{
      if(check==1){
     console.log(list.topDonors);
     setList1(list.topDonors);
      }
      },[check])
  
  const columns =[
    {
      name:"Student's Name",
      selector:(data)=>data.name
    },
    {
        name:"Email",
        selector:(data)=>data.email
      },
    {
      name:"Donated Count",
      selector:(data)=>data.donated_count
    },
  ]

return(<>
{loading?<div id='loader2'><ReactBootStrap.Spinner animation="border" id="spinner2"/></div>:null}
  <DataTable columns={columns} data={list1} customStyles={tableCustomStyles} 
  />
</>)
}
export default Donor;


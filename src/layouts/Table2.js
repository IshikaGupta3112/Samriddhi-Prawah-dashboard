import react, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import tick from "../assets/img/tick.svg";
import cross from "../assets/img/cross.svg";
import tv from "../assets/img/TV.jpg";
import cooler from "../assets/img/Cooler.jpg";
import "../layouts/Table.css";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import {
  Dialog,
  DialogTitle,
  Box,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Table2() {
  var imgSrc = localStorage.getItem("dialogImage");
  const [showDialog, setShowDialog] = useState(false);

  // const[newArr , setNewArr] = useState("");

  const closeDialog = () => setShowDialog(false);

  function imgClick(e) {
    setShowDialog(true);
    localStorage.setItem("dialogImage", e.target.src);
  }
  // const data= [{name:"Television" , category:"Electronics" , img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Cooler" , category:"Electronics" , img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Bottle" , category:"Object" , img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Top" , category:"Clothes" ,img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Earphones" , category:"Electronics" , img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Mouse" , category:"Electronics" , img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Speaker" , category:"Electronics" , img:<img src={tv} id='tvimg' onClick={imgClick}></img>},
  // {name:"Bed" , category:"Furniture" ,img:<img src={tv} id='tvimg' onClick={imgClick}></img>}]

  const data = [
    {
      id: "1",
      name: "Television",
      category: "Electronics",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "2",
      name: "Cooler",
      category: "Electronics",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "3",
      name: "Bottle",
      category: "Object",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "4",
      name: "Top",
      category: "Clothes",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "5",
      name: "Earphones",
      category: "Electronics",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "6",
      name: "Mouse",
      category: "Electronics",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "7",
      name: "Speaker",
      category: "Electronics",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "8",
      name: "Bed",
      category: "Furniture",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "9",
      name: "Television",
      category: "Electronics",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "10",
      name: "Cooler",
      category: "Electronics",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "11",
      name: "Bottle",
      category: "Object",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "12",
      name: "Top",
      category: "Clothes",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "13",
      name: "Earphones",
      category: "Electronics",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "14",
      name: "Mouse",
      category: "Electronics",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "15",
      name: "Speaker",
      category: "Electronics",
      img: "https://cdn.rentickle.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_cooler_2_1_2.jpg",
      stname: "Ishika",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
    {
      id: "16",
      name: "Bed",
      category: "Furniture",
      img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      stname: "Mansi",
      branch: "CSE",
      stno: "2110184",
      gender: "Female",
      year: "2nd",
      date: "26 April 2023",
      time: "12pm",
      place: "Hostel",
    },
  ];

  const newArr = [];
  useEffect(() => {
    data.map((obj) => {
      // newArr.push(obj);
      newArr.push({
        name: obj.name,
        category: obj.category,
        img: <img src={obj.img} id="tvimg" onClick={imgClick}></img>,
      });
    });
  }, [data]);
  console.log(newArr);

  //  const[tableData, setTableData] = useState([]);
  // let titles=[];
  //  titles=data.map(obj=>obj.img);

  const col = [
    { title: "Product Name", field: "name" },
    { title: "Category", field: "category" },
    { title: "Image", field: "img" },
  ];
  return (
    <>
      <Dialog open={showDialog} onClose={closeDialog}>
        <Box>
          <img src={imgSrc} width="100%"></img>
        </Box>
      </Dialog>
      <MaterialTable
        columns={col}
        data={data}
        icons={tableIcons}
        actions={[
          {
            icon: () => <img src={tick}></img>,
            tooltip: "Approve",
            onClick: () => console.log("Approved"),
          },
          {
            icon: () => <img src={cross}></img>,
            tooltip: "Dissaprove",
            onClick: () => console.log("Disapproved"),
          },
          // {
          //   // icon:()=>{titles.map(obj=><img src={obj} id='tvimg'></img>)},
          //   icon:()=><img src={titles[1]} id='tvimg'></img>,
          //   tooltip:"Show image",
          //   onClick:(e)=>{
          //     setShowDialog(true);
          //     localStorage.setItem("dialogImage",e.target.src);
          //   }
          // },
        ]}
        options={{
          toolbar: false,
          headerStyle: { backgroundColor: "#109380", color: "white" },
        }}
        title="Products"
      />
    </>
  );
}

export default Table2;

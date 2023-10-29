import react, { useState } from "react";
import DataTable from "react-data-table-component";
import "../layouts/Table.css";
import tick from "../assets/img/tick.svg";
import cross from "../assets/img/cross.svg";
import eye from "../assets/img/eye.svg";
import collect2 from "../assets/img/collect2.svg";
import image from "../assets/img/img.svg";
import back from "../assets/img/back.svg";
import forward from "../assets/img/forward.svg";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { tableCustomStyles } from "./CustomStyles";
import { useDispatch } from "react-redux";
import { approvedItems } from "redux/actions/ItemsAction";
import { collectItem } from "redux/actions/ItemsAction";
import { useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { approveData } from "redux/actions/ItemsAction";
import { rejectData } from "redux/actions/ItemsAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./a.css";

function Approved() {
  const [check, setCheck] = useState(0);
  const [check2, setCheck2] = useState(0);
  const [check3, setCheck3] = useState(0);
  const [check4, setCheck4] = useState(0);
  const [loading, setLoading] = useState(true);
  const [list1, setList1] = useState();
  const [object, setObject] = useState();
  const [n, setN] = useState(1);
  const [pages, setPages] = useState();

  const list = useSelector((s) => s.itemReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(n);
    setCheck(0);
    setLoading(true);
    dispatch(approvedItems(n, setLoading, setCheck));
    if (n === 1) {
      document.getElementById("backimg").style.display = "none";
      document.getElementById("frontimg").style.display = "block";
    } else if (n === pages) {
      document.getElementById("frontimg").style.display = "none";
      document.getElementById("backimg").style.display = "block";
    } else {
      document.getElementById("backimg").style.display = "block";
      document.getElementById("frontimg").style.display = "block";
    }
  }, [n]);

  useEffect(() => {
    dispatch(approvedItems(n, setLoading, setCheck));
  }, []);

  useEffect(() => {
    if (check == 1) {
      console.log(list.items);
      setList1(list.items);
      setPages(list.pages);
      if (list.pages === 1) {
        document.getElementById("navigationDiv").style.display = "none";
      }
    }
  }, [check]);

  useEffect(() => {
    console.log(check2);
    if (check2 == 1) {
      toast.success("Item Approved", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var productId2 = localStorage.getItem("productId2");
      const object = list1.find((obj) => obj._id === productId2);
      object.status = "APPROVED";
    }
  }, [check2]);

  useEffect(() => {
    console.log(check4);
    if (check4 == 1) {
      toast.success("Collected At AKG", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var productId2 = localStorage.getItem("productId2");
      const object = list1.find((obj) => obj._id === productId2);
      object.status = "COLLECTED_AKG";
    }
  }, [check4]);

  useEffect(() => {
    console.log(check3);
    if (check3 == 1) {
      toast.error("Item Rejected", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var productId2 = localStorage.getItem("productId2");
      const object = list1.find((obj) => obj._id === productId2);
      object.status = "REJECTED";
    }
  }, [check3]);

  const columns = [
    {
      name: "Product Name",
      selector: (data) => data.name,
    },
    {
      name: "Image",
      selector: (data) => (
        <img src={image} id={data._id} className="tvimg" onClick={imgClick} />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          {row.status !== "APPROVED" ? (
            <img
              src={tick}
              onClick={approve}
              id={row._id}
              className="tickimg"
            />
          ) : null}
          {row.status !== "REJECTED" ? (
            <img
              src={cross}
              onClick={disapprove}
              id={row._id}
              className="tickimg"
            />
          ) : null}
        </>
      ),
    },
    {
      name: "Collect",
      cell: (row) => (
        <>
          <img
            src={collect2}
            onClick={collect}
            id={row._id}
            className="tickimg"
          />
          {/* <select id={row._id} onClick={storeId} onChange={collect}>
        <option value='--select--'>--select--</option>
        <option value='COLLECTED_BH1'>BH1</option>
        <option value='COLLECTED_BH2'>BH2</option>
        <option value='COLLECTED_BH3'>BH3</option>
        <option value='COLLECTED_GH1'>GH1</option>
        <option value='COLLECTED_GH2'>GH2</option>
        <option value='COLLECTED_GH3'>GH3</option>
      </select> */}
        </>
      ),
    },

    {
      name: "Status",
      selector: (data) => data.status,
    },
    {
      name: "Student's Details",
      cell: (row) => (
        <>
          <img src={eye} id={row._id} className="viewEye" onClick={view} />
        </>
      ),
    },
  ];

  function approve(e) {
    console.log("approved");
    console.log(e.target.id);
    localStorage.setItem("productId2", e.target.id);
    setLoading(true);
    setCheck2(0);
    const fd = {
      status: "APPROVED",
    };
    dispatch(approveData(fd, setCheck2, setLoading));
  }

  function backFunc() {
    setN(n - 1);
  }
  function forwardFunc() {
    console.log(pages);
    if (n < pages) {
      setN(n + 1);
    } else {
      document.getElementById("frontimg").style.display = "none";
    }
  }

  function collect(e) {
    console.log(e.target.value);
    console.log(e.target.id);
    localStorage.setItem("productId2", e.target.id);
    setLoading(true);
    setCheck4(0);
    const fd = {
      status: "COLLECTED_AKG",
    };
    dispatch(collectItem(fd, setCheck4, setLoading));
  }

  function storeId(e) {
    console.log(e.target.id);
    localStorage.setItem("productId2", e.target.id);
  }

  function disapprove(e) {
    console.log("rejected");
    console.log(e.target.id);
    localStorage.setItem("productId2", e.target.id);
    setLoading(true);
    setCheck3(0);
    const fd = {
      status: "REJECTED",
    };
    dispatch(rejectData(fd, setCheck3, setLoading));
  }

  function view(e) {
    setShowDialog2(true);
    console.log(e.target.id);
    localStorage.setItem("productId", e.target.id);
    var productId = localStorage.getItem("productId");
    setObject(list1.find((obj) => obj._id === productId));
    console.log(object);
  }

  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  const closeDialog = () => setShowDialog(false);
  const closeDialog2 = () => setShowDialog2(false);

  function imgClick(e) {
    setShowDialog(true);
    console.log(e.target.id);
    localStorage.setItem("productId", e.target.id);
    var productId = localStorage.getItem("productId");
    setObject(list1.find((obj) => obj._id === productId));
  }

  return (
    <>
      {loading ? (
        <div id="loader2">
          <ReactBootStrap.Spinner animation="border" id="spinner2" />
        </div>
      ) : null}
      <Dialog open={showDialog} onClose={closeDialog}>
        {object ? (
          <Carousel showThumbs={false} useKeyboardArrows={true}>
            {object
              ? object.images.map((URL) => (
                  <div className="slide">
                    <img
                      alt="sample_file"
                      src={URL}
                      style={{ marginBottom: "0px" }}
                    />
                  </div>
                ))
              : null}
          </Carousel>
        ) : null}
      </Dialog>
      <Dialog open={showDialog2} onClose={closeDialog2}>
        <DialogTitle>Student's Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {object ? (
              <pre>
                <span style={{ fontWeight: "bold" }}>Student's Name : </span>
                <span>{object.user.name}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Email : </span>
                <span>{object.user.email}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Course : </span>
                <span>{object.user.course}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Branch : </span>
                <span>{object.user.branch}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Year : </span>
                <span>{object.user.year}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Phone No. : </span>
                <span>{object.user.phone_no}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Student's No : </span>
                <span>{object.user.student_no}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  Place of Residence :{" "}
                </span>
                <span>{object.user.POR}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Description : </span>
                <span>{object.description}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Date Of Donation : </span>
                <span>{}</span>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Time of Donation : </span>
                <span>{}</span>
              </pre>
            ) : null}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <DataTable
        columns={columns}
        data={list1}
        customStyles={tableCustomStyles}
      />
      <div
        id="navigationDiv"
        style={{
          backgroundColor: "white",
          position: "fixed",
          bottom: "0",
          width: "79.9vw",
          display: "flex",
          justifyContent: "right",
          padding: "6px 20px 6px 0",
        }}
      >
        <>
          <img
            style={{ cursor: "pointer" }}
            id="backimg"
            onClick={backFunc}
            src={back}
          />
          <pre> </pre>
          <img
            style={{ cursor: "pointer" }}
            onClick={forwardFunc}
            id="frontimg"
            src={forward}
          ></img>
        </>
      </div>
      <ToastContainer />
    </>
  );
}
export default Approved;

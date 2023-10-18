import React, { useState , useEffect} from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import * as ReactBootStrap from "react-bootstrap";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { collectorData } from "redux/actions/CollectorActions";

function Role() {

  const [email, setEmail] = useState("");
  const [check , setCheck] = useState(0);
  const [loading , setLoading] = useState(false);

const mssg = useSelector((state)=>state.collectorReducer);
console.log(mssg);

useEffect(()=>{
    console.log(check);
    if(check==1){
      if(mssg.response2=="User Does Not Exist"){
        toast.error(mssg.response2, {
          position: toast.POSITION.TOP_RIGHT
      });
      }
      else{
    toast.success(mssg.response2, {
        position: toast.POSITION.TOP_RIGHT
    });
  }
  }
} ,[check]);

  const dispatch= useDispatch();

  function handleMail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e){
    setCheck(0);
    setLoading(true);
    e.preventDefault();
    console.log(email);
    const fd={
     email:email
    } 
    dispatch(collectorData(fd , setCheck , setLoading));
  }

  return (
    <>
    {loading?<div id='loader2'><ReactBootStrap.Spinner animation="border" id="spinner2"/></div>:null}
      <Container fluid>
        <Row>
          <Col md="8">
            <Card style={{width:"70vw"}}>
              <Card.Header>
                <Card.Title as="h4" style={{fontWeight:400}}>Change Role</Card.Title>
              </Card.Header>
              <Card.Body>
                <p style={{fontWeight:200}}>Make someone a collector so that he/she can collect the items donated by the students in the hostel libraries and other places else let he/she be a user.</p>
                <Form  style={{marginRight:"15px"}} onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label style={{fontWeight:400}}>Email Address</label>
                        <Form.Control
                        value={email}
                        onChange={handleMail}
                          placeholder="Enter Email Address"
                          type="email" required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    {/* <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    {/* <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  </Row>
                  {/* <Row> */}
                    {/* <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    {/* <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  {/* </Row> */}
                  {/* <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  {/* <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  {/* <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Button
                  style={{marginTop:"25px" , marginBottom:"25px" , backgroundColor:" #109380" , border:"none" , width:"150px"}}
                    className="btn-fill pull-right" 
                    type="submit"
                  >
                  Change
                  </Button>
                  {/* <div className="clearfix"></div> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col> */}
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}

export default Role;

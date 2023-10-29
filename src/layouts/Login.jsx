import "./auth.css";
import logo from "../assets/img/logo2.svg";
import mailimg from "../assets/img/mail.svg";
import lockimg from "../assets/img/lock.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logindata } from "redux/actions/Authaction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const dispatch = useDispatch();
  const history = useHistory();

  const [check, setCheck] = useState(0);

  const mssg = useSelector((state) => state.authreducer);
  console.log(mssg);

  useEffect(() => {
    console.log(check);
    if (check == 1) {
      toast.error(mssg.response1, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [check]);

  function showHide() {
    setShow(!show);
  }

  function handleMail(e) {
    setEmail(e.target.value);
  }
  function handlePass(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setCheck(0);
    const fd = {
      uname: email,
      password: password,
    };
    dispatch(logindata(fd, history, setCheck, setLoading));
  }

  return (
    <>
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
      <div id="flex">
        <div className="bluediv">
          <img src={logo} className="bluedivimg" />
        </div>
        <div id="forms">
          <h1 className="form-heading">Login</h1>
          <form onSubmit={handleSubmit} id="formtop">
            <div id="formflex">
              <label htmlFor="email" id="formlabel">
                User Name
              </label>
              <input
                type="text"
                id="forminput"
                value={email}
                placeholder="Enter User name"
                onChange={handleMail}
                maxLength={30}
                required
              ></input>
              <img src={mailimg} id="mailimg"></img>
              <label htmlFor="password" id="formlabel">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                id="forminput"
                value={password}
                placeholder="Enter Your Password"
                onChange={handlePass}
                required
              ></input>
              <img src={lockimg} id="mailimg"></img>
              {show ? (
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={showHide}
                  id="eyecloseimg"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={showHide}
                  id="eyecloseimg"
                />
              )}
              <p id="forgotlink"></p>
            </div>
            <button type="submit" id="formbtn">
              LOGIN
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;

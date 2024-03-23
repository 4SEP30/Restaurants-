import "./Login.scss";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from "axios";

// import our assets
import video from "../../LoginAsset/pexel.mp4";
import logo from "../../LoginAsset/logo.png";
import { useEffect, useState } from "react";

const Login = () => {
  // usestate hook to store inputs
  const [LoginUserName, setLoginUserName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  // Let us now show the message to the user
  const [LoginStatus, setLoginStatus] = useState("");
  const [statusHolder, setstatusHolder] = useState("message");

  const loginUser = (e) => {
    // Lets prevent submitting
    e.preventDefault();
    // We shall require Axios to create an API that connects to the server - lets install that
    Axios.post("http://localhost:3000/login", {
      // create variable to send to the server through the router
      LoginUserName: LoginUserName,
      LoginPassword: LoginPassword,
    }).then((response) => {
      console.log(
        response.data.message || LoginUserName == "" || LoginPassword == ""
      );
      // I want to catch the response first - We have data successully from the database and we can catch an error if the credentaills are wrong
      if (response.data.message) {
        // if credential don't match
        navigateTo("/"); // so we shall navigate to the same login page
        setLoginStatus(`Credentials Don't Exist!`);
      } else {
        navigateTo("/dashboard"); // if the credentils match we shall navigate to the dashboard
      }
    });
  };

  useEffect(() => {
    if (LoginStatus !== "") {
      setstatusHolder("showMessage"); // show message
      setTimeout(() => {
        setstatusHolder("message"); // hide it after 4s
      }, 4000);
    }
  }, [LoginStatus]);

  // Lets clear the form on submit
  const onSubmit = () => {
    setLoginUserName("");
    setLoginPassword("");
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Do not have an account</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{LoginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

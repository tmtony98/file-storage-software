import React from 'react'
import loginimg1  from "../assets/images/login/2876475.jpg"
import loginimg2 from "../assets/images/login/3556960.jpg";
import bg from "../assets/images/login/3d-render-modern-technology-background-with-flowing-lines-floating-particles-design.jpg"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  //
const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    const {name ,email,password } = userData
    if (!name || !email || !password) {
     alert("please fill the form completely")
    }else{
      e.preventDefault();
      try {
        // Make a POST request to store form data in JSON Server
        const res = await axios.post(`http://localhost:5000/user/register`, userData);
        console.log(res.status);
        if (res.status === 200) {
          alert(`sign up completed successfully!`);
          setUserData({
            name: "",
            email: "",
            password: "",
          });
          navigate("/login")
        } else if (res.status === 404) {
          alert(res.data);
        }
        //  handle success message goes here
      } catch (error) {
        // Handle errors
        alert("user already exists");
        console.error("Error :", error);
      }
    }
    
  };

  return (
<>
<section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card " style={{ borderRadius: "1rem" }}>
                <div className="row  g-0">
                  <div style={{position:"relative"}} className="col-md-6 d-flex  col-lg-5 d-none d-md-block  ">
                    <img
                      src={loginimg2}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" , position:"absolute",  top: "15%",
                      left: "0%"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4  p-lg-5 text-black">
                      <form className="">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold ">Beeetle Box</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                        Register your account
                        </h5>
                        <div className="form-outline mb-3">
                          <label for="exampleInput" class="form-label">
                           Full Name
                          </label>
                          <input
                           name="name"
                           value={userData.name}
                           onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            id="exampleInput"
                          
                          />
                        </div>
                        <div className="form-outline mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email address
                          </label>
                          <input
                           name="email"
                            type="email"
                            onChange={handleInputChange}
                          
                            value={userData.email}
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label for="exampleInputPassword1" class="form-label">
                            Password
                          </label>
                          <input
                           type="password"
                           name="password"
                           value={userData.password}
                           onChange={handleInputChange}
                            
                            class="form-control"
                            id="exampleInputPassword1"
                          ></input>
                        </div>
                        <div className="pt-1 mb-4">
                          <button  onClick={handleSubmit}
                            className="btn btn-primary btn-block "
                            type="button"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                       <Link to={"/login"}>
                       <p
                          className="mb-2 pb-lg-1"
                          style={{ color: "#393f81" }}
                        >
                          Already have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Login here
                          </a>
                        </p>
                       </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</>  )
}

export default Register
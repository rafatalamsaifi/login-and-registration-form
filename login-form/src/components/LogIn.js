import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const history = useNavigate();
  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });
  // const [data, setData] = useState([]);
  console.log(inpVal);
  const getData = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value, name);
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("usersEntry");
    console.log(getuserArr);
    const { email, password } = inpVal;
    if (
      !email.includes("@") ||
      !email.includes(".") ||
      !email.includes("com")
    ) {
      alert("Please enter a valid email");
    } else if (password === "") {
      alert("Enter the password");
    } else if (password.length < 5) {
      alert("Password should be altleast 5 character");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, n) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login successfully");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/details");
        }
      }
    }
  };

  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign In</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onChange={getData}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mb-3 col-lg-6"
              style={{ background: "rgb(67, 185, 127)" }}
              onClick={addData}
            >
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Create an Account
            <span>
              <NavLink to="/" className="px-2">
                Sign Up
              </NavLink>
            </span>
          </p>
        </div>
        <SignImg />
      </section>
    </div>
  );
};

export default LogIn;

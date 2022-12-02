import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
// import axios from "axios";

const Home = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  const [data, setData] = useState([]);
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
    console.log(inpVal);
    const { name, email, date, password } = inpVal;
    if (name === "") {
      alert("Name is required");
    } else if (
      !email.includes("@") ||
      !email.includes(".") ||
      !email.includes("com")
    ) {
      alert("Please enter a valid email");
    } else if (date === "") {
      alert("Please enter a valid Date");
    } else if (password === "") {
      alert("Enter the password");
    } else if (password.length < 5) {
      alert("Password should be altleast 5 character");
    } else {
      // const url = "http://192.168.2.209:3005/api/auth/login";
      // axios.post(url, inpVal).then((resp) => (resp.inpVal);
      localStorage.setItem("usersEntry", JSON.stringify([...data, inpVal]));
      console.log("Data added successfully");
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control type="date" name="date" onChange={getData} />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
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
              Aleady Have an Account?
              <span>
                <NavLink to="/login" className="px-2">
                  Sign In
                </NavLink>
              </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Home;

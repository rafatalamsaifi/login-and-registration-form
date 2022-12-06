import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);

  const history = useNavigate();
  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);
  //   console.log(todayDate);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      //   console.log(user);
      setLoginData(user);

      const userbirth = loginData.map((el, n) => {
        return el.date === todayDate;
      });
      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };
  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/login");
  };
  useEffect(() => {
    birthday();
  }, []);
  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1> details page</h1>
          <h2>{loginData[0].name}</h2>
          <Button onClick={userlogout}>LogOut</Button>
          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Welcome to Enter Here!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;

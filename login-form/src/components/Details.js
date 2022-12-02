import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Details = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
  var todayDate = new Date().toISOString().slice(0, 10);
  //   console.log(todayDate);
  const Birthday = () => {
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
    console.log("ok");
  };
  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1> details page</h1>
          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
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

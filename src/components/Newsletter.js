import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Newsletter = ({ status, message, onValidated }) => {
  // const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState("Submit");
  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //   email.indexOf("@") > -1 &&
  //   onValidated({
  //     EMAIL: email
  //   })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oxb51rd", "template_pbu1v86", form.current, {
        publicKey: "7toK4xDYLQtNJ7yVe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setButtonText("Sent!");
          setTimeout(() => {
            setButtonText("Submit");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Col
      lg={12}
      style={{
        margin: "0 auto", // Centers the column horizontally
      }}
    >
      <div className="newsletter-bx wow slideInUp">
        {
          /* <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="new-email-bx">
                  <input type="email" name="from_email" placeholder="Email Address" required />
                  <button type="submit">{buttonText}</button>
                </div>
              </form>
            </Col>
          </Row> */
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                style={{
                  background:
                    "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                  overflow: "hidden",
                  width: "70px",
                  height: "70px",
                }}
                target="_blank"
                href="https://www.linkedin.com/in/bilalha55an"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                style={{
                  background:
                    "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                  overflow: "hidden",
                  width: "70px",
                  height: "70px",
                }}
                target="_blank"
                href="https://github.com/bilalhassan149"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                style={{
                  background:
                    "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                  overflow: "hidden",
                  width: "70px",
                  height: "70px",
                }}
                href="#"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <h4
              style={{
                color: "black",
                margin: "0 auto",
              }}
            >
              © 2023 Bilal Hassan
            </h4>
          </Col>
        }
      </div>
    </Col>
  );
};

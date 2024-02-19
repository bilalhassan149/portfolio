import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oxb51rd', 'template_pbu1v86', form.current, {
        publicKey: '7toK4xDYLQtNJ7yVe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setButtonText('Email Sent Successfully!')
          setTimeout(() => {
          setButtonText('Send')
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  name="from_name" placeholder="Your Name" required />
                    </Col>
                   
                    <Col size={12} sm={6} className="px-1">
                    <input type="text"  name="from_email" placeholder="Enter Email" required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" required></textarea>
                      <button type="submit" value="Send"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


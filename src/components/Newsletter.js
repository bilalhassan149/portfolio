import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Newsletter = ({ status, message, onValidated }) => {
  // const [email, setEmail] = useState('');
  const [buttonText,setButtonText] = useState('Submit');
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
      .sendForm('service_oxb51rd', 'template_pbu1v86', form.current, {
        publicKey: '7toK4xDYLQtNJ7yVe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setButtonText('Sent!')
          setTimeout(() => {
          setButtonText('Submit')
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
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
          </Row>
        </div>
      </Col>
  )
}

/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useRef, useState } from "react";

const RSVP = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbwn9E34iHxc1KIbyZ5Wjpv4S9cazPB-DpVw-ee0aQVyXvF3n338pKbBAfSAiUARJBN6/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        alert(data.msg);
        setSubmitted(true);  // Set to show the thank you message
      })
      .catch(err => console.log(err));
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 20px',
        background: 'linear-gradient(to right, rgba(20, 30, 48, 0.7), rgba(36, 59, 85, 0.9)), url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZneW5la3Q4am9hcWMzb3RuM2c2bHgwaGxzaWI2c3p5ZmdtZGw2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FlodpfQUBSp20/giphy.webp)',
        backgroundPosition: 'center',
        fontFamily: 'Poppins, sans-serif',
        color: 'white',
      }}
    >
      {submitted ? (
        <div style={{ textAlign: 'center' }}>
          <h4>Thanks for submitting!</h4>
          <Button href="https://opti-tunity.vercel.app/" style={{ marginTop: '20px', color: '#06b6d4', border: 'none' }}>
            Back to Home
          </Button>
        </div>
      ) : (
        <>
          <p style={{ color: 'white', marginBottom: '20px', fontSize: '14px' }}>
            RSVP us to get notified once we launch our website fully!
          </p>
          <Form
            style={{
              textAlign: 'left',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '30px',
              borderRadius: '15px',
              width: '100%',
              maxWidth: '500px',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              marginTop: '20px',
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <h3 style={{
              color: 'white',
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600',
              textAlign: 'center'
            }}>RSVP Form</h3>
            
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ color: 'white' }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="Name"
                required
                style={{ 
                  borderRadius: '10px', 
                  marginBottom: '15px', 
                  color: 'black',  // Text color
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'  // Light background to contrast with white
                }}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: 'white' }}>Email Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="Email"
                required
                style={{ 
                  borderRadius: '10px', 
                  marginBottom: '15px', 
                  color: 'black',  // Text color
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'  // Light background to contrast with white
                }}
              />
              <Form.Text className="text-muted" style={{ color: 'white' }}>
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label style={{ color: 'white' }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="Message"
                required
                style={{ 
                  borderRadius: '10px', 
                  marginBottom: '15px', 
                  color: 'black',  // Text color
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'  // Light background to contrast with white
                }}
              />
            </Form.Group>
            
            <Button
              style={{
                background: 'linear-gradient(to right, #1e3a8a, #06b6d4)',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: 'none',
                display: 'block',
                margin: '20px auto 0',
                transition: 'opacity 0.3s ease',
              }}
              variant="success"
              type="submit"
              onMouseOver={(e) => (e.target.style.opacity = '0.9')}
              onMouseOut={(e) => (e.target.style.opacity = '1')}
            >
              Submit
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default RSVP;

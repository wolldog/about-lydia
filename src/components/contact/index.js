import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";

//Import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;

    if (target.value.length === 0) {
      setErrorMessage(`Your ${inputType} is required to submit`);
    }
    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of page refresh on submit
    e.preventDefault();

    // Validate email address. If invalid display error message.
    
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      // Exit out of this code block so that the user can correct it
      return;
    }

    // Confirm successful submission
    alert(`Hello ${name}! Thank you for your message`);

    // Clear input fields if form submit is successful
    setName("");
    setEmail("");
    setMessage("");
  };

  return (

    <div>
      <h1 className="heading">Contact</h1>
         {errorMessage && (
      <div>
        <p className="error">{errorMessage}</p>
      </div>
    )}
    
      <Form className="formContainer" style={{width:'75%', margin:'auto'}}>
        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="text-area"
            name="message"
            placeholder="Enter your message"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={message}
          />
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>

    </div>
  );
}

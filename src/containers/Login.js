import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  function showAgeAlert(show) {
    if (age < 18) alert("You Should be over than 18");
  }

  function validateForm() {
    return email.length > 0 && password.length > 8 && age > 18;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <p className={"bigblue"}>Register To Welcome Matrix World</p>
        <FormGroup controlId="email" bsSize="large">
          <controlLabel>Email</controlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <controlLabel>Password</controlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="age" bsSize="large">
          <controlLabel>Age</controlLabel>
          <FormControl
            value={age}
            onChange={e => setAge(e.target.value)}
            type="number"
          />
        </FormGroup>
        <FormGroup controlId="address" bsSize="large">
          <controlLabel>Adress</controlLabel>
          <FormControl
            value={address}
            onChange={e => setAddress(e.target.value)}
            type="adress"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

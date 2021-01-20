import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Signup.css";

export default function Signup() {

  // Setup for using the custom useFormFields handler
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const history = useHistory();
  
  // This retrieves the userHasAuthenticated status from the AppContext Provider in App.js
  const { userHasAuthenticated } = useAppContext();

  // Validation for an accurate form! Where can you use this?
  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  // Validation for an accurate confirmation form! Where can you use this?
  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    // Sign up logic!
  }
  
  async function handleConfirmationSubmit(event) {
    event.preventDefault();
  
    // Confirmation logic!
  }

  function renderConfirmationForm() {
    return (
      <div>This will bethe confirmation formQ</div>
    );
  }

  function renderForm() {
    return (
      <div>There will be a form here!</div>
    );
  }

  return (
    <div className="">
      This is where a sign up/confirm form will be!
    </div>
  );
}
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Login.css";

export default function Login() {
  // Set up for the routing history. This allows you to change the route (aka the url in the searchbar)
  const history = useHistory();
  // Retrieves authentication status from the AppContext Provider in App.js
  const { userHasAuthenticated } = useAppContext();

  // Setup for using the custom useFormFields handler
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  // Validate that the form is filled in! Where can this be used?
  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // handle auth!

      // Sends the user to their profile
      history.push("/profile");
    } catch (e) {
      onError(e);
    }
  }

  return (
    <div className="Login">
      Login form will be here!
    </div>
  );
}
import React, { useState, useEffect, useRef } from "react";
import { API } from "aws-amplify";
import { Table, InputGroup, Button, FormControl } from "react-bootstrap";
import _ from "lodash";

import { onError } from "../libs/errorLib";
import "./Profile.css";
import LoaderButton from "../components/LoaderButton";


export default function Profile() {

  return (
    <div className="Profile">
      <div className="">
        <h1>Stonks</h1>
        <p className="">Welcome to your profile!</p>
      </div>
    </div>
  );
}
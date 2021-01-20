import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";

function App() {

    // TODO Authentication state code here
  const [isAuthenticated, isAuthenticating, userHasAuthenticated] = [false, false, () => null];

  // Enables React Router history use
  const history = useHistory();

  // TODO add a useEffect for onLoad which will happen exactly once.
  
  async function onLoad() {
    try {
      // TODO make call to authenticate
      // Set state to authenticated
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    // TODO set state to is authenticating
  }

  async function handleLogout() {
    // TODO Amplify Auth call
    // Set Authentication State

    history.push("/login");
  }

  // This is set up to return a Navbar which uses bootstrap styling based on the authenticated/authenticating states of this program.
  // Below that is a react-router object using a context provider hook (see libs/contextLib.js) to send authentication status.
  return (
    !isAuthenticating && (
      <div className="">
        {/* You can change the styling on Navbar and other Bootstrap components by changing props!
        Take a look at the react-bootstrap docs: https://react-bootstrap.github.io/components/alerts */}
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
              Stonks
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
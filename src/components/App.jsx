import React, { useState, useEffect } from "react";
import "./App.scss";
import Button from "react-bootstrap/Button";

function App() {
  // Sets a logged in user based on the local memberstack token.
  const [user, setUser] = useState(
    localStorage.getItem("memberstack") &&
      JSON.parse(localStorage.getItem("memberstack")).email
      ? JSON.parse(localStorage.getItem("memberstack")).email
      : ""
  );

  const logout = () => {
    localStorage.removeItem("memberstack");
    localStorage.removeItem("ms_expire");
    setUser("");
  };

  // Loads the memberstack script on each rerender. This allows a user to logout and then log back in without needing to refresh the page.
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://api.memberstack.io/static/memberstack.js?custom";
    script.setAttribute(
      "data-memberstack-id",
      "7b5c7bb6c59727f611d3950e7bc0266b"
    );
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  // conditionally renders content based on user state.
  return (
    <div className="user-container">
      {user ? (
        <>
          <div>Logged in as {user}</div>
          <Button variant="primary" onClick={() => logout()}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="primary" href="#/ms/login">
            Login
          </Button>
          <Button
            variant="primary"
            data-ms-membership="5f19e5184b7231000461a1ab"
          >
            Register
          </Button>
        </>
      )}
    </div>
  );
}

export default App;

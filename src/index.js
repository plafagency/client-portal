import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import Login from "./components/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b1oxd101kkir4ase.us.auth0.com"
      clientId="ccEXIRXdIX0bRV6aDvXaObMzKSjmV4Wm"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
      <Login />
      <LogoutButton />
      {/*       <LoginButton />

      <Profile /> */}
    </Auth0Provider>
  </React.StrictMode>
);

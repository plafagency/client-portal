import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";

function UserGreeting() {
  const { isAuthenticated, user } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <Typography variant="h5">¡Hola {user.nickname}!</Typography>
      </div>
    )
  );
}

export default UserGreeting;

import React, { useState } from "react";
import { Container, Box, Alert, Typography } from "@mui/material";
import LoginButton from "../../login";
import logo from "../../img/header-logo-retina.png";

function Login() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          width: "100%",
          margin: "auto",
          mt: "50px",
          textAlign: "center",
        }}
      >
        <img src={logo} height="95px" />
        <Typography variant="h2" component="h1" sx={{ margin: "25px" }}>
          Portal de Clientes
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ maxWidth: "800px", marginY: "25px" }}
        >
          Te damos la bienvenida al portal de Clientes de PLAF. El contenido de
          este sitio es exclusivo para clientes. Por favor, inicia sesión
          haciendo clic debajo.
        </Typography>
        <Typography
          variant="caption"
          component="p"
          sx={{ maxWidth: "800px", marginY: "25px" }}
        >
          Si tienes algún inconveniente, escríbenos a hola@plaf.agency
        </Typography>
        <LoginButton />
      </Box>
    </Container>
  );
}

export default Login;

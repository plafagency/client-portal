import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://plaf.agency/wp-json/jwt-auth/v1/token";

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL, {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
    throw new Error("Error en inicio de sesión");
  }
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const jwt = await login(username, password);
      setToken(jwt);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      setError("Nombre de usuario o contraseña incorrectos");
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : isLoggedIn ? (
        <Navigate to="/dashboard" />
      ) : (
        <Container>
          <Box sx={{ m: 5, display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              id="username"
              type="email"
              label="E-mail"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="password"
              type="password"
              label="Contraseña"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Box sx={{ color: "red" }}>
                <p>{error}</p>
              </Box>
            )}
            <Button variant="contained" size="large" onClick={handleLogin}>
              Iniciar sesión
            </Button>
          </Box>
        </Container>
      )}
    </div>
  );
}

export default Login;

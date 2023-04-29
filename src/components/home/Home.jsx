import React from "react";
import TopNavBar from "../nav/TopNavBar";
import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import UserGreeting from "./UserGreeting";

function Home() {
  return (
    <div>
      <TopNavBar />
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <UserGreeting />

        <Divider sx={{ pt: 3, mb: 3 }} />
        <Box
          sx={{
            m: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "space-between",
          }}
        >
          <Paper elevation={4} sx={{ p: 3, width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h6">
              ¿Qué puedes encontrar en el portal?
            </Typography>
            <Typography variant="paragraph">
              En este portal encontrarás información importante sobre tu cuenta
              de PLAF.
            </Typography>
          </Paper>
          <Paper elevation={4} sx={{ p: 3, width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h6">¿Quiénes tienen acceso?</Typography>

            <Typography variant="paragraph">
              Solo pueden acceder clientes de PLAF, y la información que se
              encuentra disponible aquí es exclusiva para ti.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Home;

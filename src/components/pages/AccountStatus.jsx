import React from "react";
import TopNavBar from "../nav/TopNavBar";
import { useState, useEffect } from "react";
import { Typography, Card, CardContent, Container, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DownloadIcon from "@mui/icons-material/Download";

function AccountStatus() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch("https://plaf.agency/wp-json/wp/v2/account_update")
      .then((response) => response.json())
      .then((data) => setUpdates(data));
  }, []);

  const columns = [
    {
      field: "account_update_date",
      headerName: "Fecha del movimiento",
      width: 175,
    },
    {
      field: "account_update_description",
      headerName: "Descripción",
      width: 350,
    },
    { field: "account_update_download", headerName: "Acciones", width: 75 },
    { field: "account_update_debit", headerName: "Débito", width: 130 },
    { field: "account_update_credit", headerName: "Crédito", width: 130 },
  ];

  const rows = updates.map((update, id) => ({
    id: id,
    account_update_date: update.acf.account_update_date,
    account_update_description: update.acf.account_update_description,
    account_update_download: update.acf.account_update_download ? (
      <DownloadIcon />
    ) : null,
    account_update_debit: update.acf.account_update_debit,
    account_update_credit: update.acf.account_update_credit,
  }));

  const sortedRows = rows.sort(
    (a, b) => new Date(b.account_update_date) - new Date(a.account_update_date)
  );

  const balance = rows.reduce(
    (total, row) =>
      total +
      (parseFloat(row.account_update_credit) || 0) -
      (parseFloat(row.account_update_debit) || 0),
    0
  );

  let balanceColor = "black";
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance > 0) {
    balanceColor = "green";
  }

  return (
    <div>
      <TopNavBar />
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Typography variant="h2">Estado de Cuenta</Typography>
        <Box
          sx={{
            m: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Card sx={{ width: 300, margin: "20px auto" }}>
            <CardContent>
              <Typography variant="h4">Saldo Actual</Typography>
              <Typography variant="h3" color={balanceColor}>
                ${balance.toFixed(0)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <DataGrid rows={sortedRows} columns={columns} pageSize={5} />
        <Typography variant="caption">S.E.U.O.</Typography>
      </Container>
    </div>
  );
}

export default AccountStatus;

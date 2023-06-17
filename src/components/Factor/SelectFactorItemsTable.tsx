import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "سفارش", width: 130 },
  { field: "Cost", headerName: "مبلغ", width: 130 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
];

const rows = [
  { id: 1, Name: "Snow", Cost: "Jon" },
  { id: 2, Name: "Lannister", Cost: "Cersei" },
  { id: 3, Name: "Lannister", Cost: "Jaime" },
  { id: 4, Name: "Stark", Cost: "Arya" },
  { id: 5, Name: "Targaryen", Cost: "Daenerys" },
  { id: 6, Name: "Melisandre", Cost: null },
  { id: 7, Name: "Clifford", Cost: "Ferrara" },
  { id: 8, Name: "Frances", Cost: "Rossini" },
  { id: 9, Name: "Roxie", Cost: "Harvey" },
];

export default function DataTable() {
  const theme = createTheme({
    palette: {
      primary: { main: "#d97706" },
    },
    direction: "rtl",
    typography: {
      fontFamily: "IRANSansMobile",
    },
  });

  return (
    <div className="w-full h-700 ">
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </ThemeProvider>
    </div>
  );
}

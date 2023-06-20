import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "سفارش", width: 250 },
  { field: "Cost", headerName: "مبلغ", width: 130 },
];


interface FactorItemsTableProps {
  orders: { Id: string; Name: string; Cost: number }[];
}

const FactorItemsTable: React.FC<FactorItemsTableProps> = ({ orders }) => {
  const [rows, setRows] = useState<
    {
      id: string;
      Name: string;
      Cost: number;
    }[]
  >([]);

  useEffect(() => {
    if (orders) {
      const gridItems = orders.map((item) => {
        return {
          id: item.Id,
          Name: item.Name,
          Cost: item.Cost,
        };
      });
      setRows(gridItems);
    }
  }, [orders]);

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
          // checkboxSelection
        />
      </ThemeProvider>
    </div>
  );
};
export default FactorItemsTable;

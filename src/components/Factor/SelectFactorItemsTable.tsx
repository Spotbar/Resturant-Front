import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "سفارش", width: 250 },
  { field: "Cost", headerName: "مبلغ", width: 130 },
];

const rows = [
  { id: "1", Name: "کوبیده مخصوص زعفرانی", Cost: 180000 },
  { id: "2", Name: "جوجه کباب", Cost: 170000 },
  { id: "3", Name: "چلو خورش سبزی", Cost: 140000 },
  { id: "4", Name: "زرشک پلو با مرغ", Cost: 120000 },
  { id: "5", Name: "میرزاقاسمی", Cost: 90000 },
  { id: "6", Name: "سالاد فصل", Cost: 40000 },
  { id: "7", Name: "نوشابه", Cost: 20000 },
  { id: "8", Name: "دلستر", Cost: 35000 },
  { id: "9", Name: "نان ", Cost: 2000 },
];

interface SelectFactorItemsTableProps {
  onSelectionChange: (selectedIds: string[], totalCost: number) => void;
}

const SelectFactorItemsTable: React.FC<SelectFactorItemsTableProps> = ({
  onSelectionChange,
}) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#d97706" },
    },
    direction: "rtl",
    typography: {
      fontFamily: "IRANSansMobile",
    },
  });
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  useEffect(() => {
    calculateSelectedCostSum();
  }, [rowSelectionModel]);

  const handleRowSelectionModelChange = (newSelectionModel: any) => {
    setRowSelectionModel(newSelectionModel);
  };

  const calculateSelectedCostSum = () => {
    let sum = 0;
    rowSelectionModel.forEach((selectedRowId) => {
      const selectedRow = rows.find((row) => row.id === selectedRowId);
      if (selectedRow) {
        sum += selectedRow.Cost;
      }
    });

    onSelectionChange(rowSelectionModel, sum);
  };

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
          rowSelectionModel={rowSelectionModel}
          onRowSelectionModelChange={handleRowSelectionModelChange}
        />
      </ThemeProvider>
    </div>
  );
};
export default SelectFactorItemsTable;

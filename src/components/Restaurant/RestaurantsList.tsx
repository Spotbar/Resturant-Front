import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { createTheme, ThemeProvider } from "@mui/material";
import IRestaurant from "../../Interface/IRestaurant";

const RestaurantsList = (props: any) => {
  const { restaurants, onEdit, onDelete } = props;

  const [selectedRow, setSelectedRow] = useState({});

  const handleEdit = (restaurant: IRestaurant) => {
    setSelectedRow(restaurant.Id);
    onEdit(restaurant);
  };

  const handleDelete = (restaurant: IRestaurant) => {
    onDelete(restaurant);
  };

  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "IRANSansMobile",
      // ...
    },
  });
  if (restaurants.length === 0) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(restaurants)) {
    console.log(restaurants);
    return <div>Data is not an array</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <div className="font-bold">نام</div>
              </TableCell>
              <TableCell align="right">
                <div className="font-bold">تلفن</div>
              </TableCell>
              <TableCell align="right"><div className="font-bold">اپراتور فروش</div></TableCell>
              <TableCell align="right"><div className="font-bold">تلفن همراه</div></TableCell>
              <TableCell align="right"> <div className="font-bold"> آدرس</div></TableCell>
              <TableCell align="center"> <div className="font-bold"> عملیات</div></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants.map((restaurant: IRestaurant) => (
              <TableRow
                key={restaurant.Id}
                selected={selectedRow === restaurant.Id}
              >
                <TableCell align="right">{restaurant.Name}</TableCell>
                <TableCell align="right">{restaurant.Tel}</TableCell>
                <TableCell align="right">{restaurant.OpratorName}</TableCell>
                <TableCell align="right">{restaurant.Mobile}</TableCell>
                <TableCell align="right">{restaurant.Address}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(restaurant)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(restaurant)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default RestaurantsList;

import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createTheme, ThemeProvider } from "@mui/material";
import Order from "../../Interface/Order";

function Row(props: { _order: Order }) {
  const [open, setOpen] = React.useState(false);
  const { _order } = props;
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="right" component="th" scope="row">
          {_order.ordertitle}
        </TableCell>
        <TableCell align="right">{_order.restaurant.label}</TableCell>
        <TableCell align="right">{_order.cost}</TableCell>
        <TableCell align="right">{_order.factorNumber.label}</TableCell>

        <TableCell>
          {_order.isShared ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <div className="text-amber-600 text-sm">
                  اشتراکی
                  <KeyboardArrowUpIcon className="text-amber-600" />{" "}
                </div>
              ) : (
                <div className="text-amber-600 text-sm">
                  اشتراکی
                  <KeyboardArrowDownIcon className="text-amber-600" />
                </div>
              )}
            </IconButton>
          ) : (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
      </TableRow>

      {_order.sharedList.length > 0 ? (
        <TableRow>
          <TableCell
            align="right"
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                {/* <Typography variant="h6" gutterBottom component="div">
                  لیست اشتراکی
                </Typography> */}
                <p className="text-lg text-slate-500">لیست اشتراکی</p>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">نام</TableCell>
                      <TableCell align="right">سهم فرد</TableCell>
                      {/* <TableCell align="right">Amount</TableCell>
                          <TableCell align="right">Total price ($)</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {_order.sharedList &&
                      _order.sharedList.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell align="right" component="th" scope="row">
                            {item.name}
                          </TableCell>
                          <TableCell align="right">{item.cost}</TableCell>
                          {/* <TableCell align="right">{item.amount}</TableCell>
                            <TableCell align="right">
                              {Math.round(item.amount * item.price * 100) / 100}
                            </TableCell> */}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export default function ReserveList({ orders }: { orders: Order[] }) {
  const [ordersData, setOrdersData] = React.useState<Order[]>([]);

  React.useEffect(() => {
    setOrdersData(orders);
  }, [orders]);

  const theme = createTheme({
    direction: "rtl",
    typography: {
      // ...
      // Tell Material-UI what's the font-size on the html element is.
      // htmlFontSize: 11,
      fontFamily: "IRANSansMobile",
      // ...
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} className="mt-8">
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <div className="font-bold">سفارش</div>
              </TableCell>
              <TableCell align="right" className="font-bold">
                <div className="font-bold">رستوران</div>
              </TableCell>
              <TableCell align="right">
                <div className="font-bold">قیمت</div>
              </TableCell>
              <TableCell align="right">
                <div className="font-bold">فاکتور</div>
              </TableCell>

              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))} */}

            {ordersData &&
              ordersData.map((row, index) => <Row key={index} _order={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

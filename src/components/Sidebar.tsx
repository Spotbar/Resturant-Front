import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
//ICons
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openOrder, setOpenOrder] = React.useState<boolean>(false);
  const [openManagerReport, setManagerReport] = React.useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-xl max-h-[calc(100vh-100px)] overflow-auto sticky top-[80px] ">
      <div className="text-lg font-bold text-amber-600 mb-4">عملیات</div>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton
          onClick={() => {
            navigate("/Reserve");
          }}
        >
          <ListItemIcon>
            <FastfoodOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">ثبت سفارش</p>
        </ListItemButton>

        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <ManageSearchOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">گزارش ها</p>
          {/* <ListItemText primary="Inbox" /> */}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShoppingBagOutlinedIcon />
              </ListItemIcon>
              <p className="w-full text-right">گزارش هفتگی</p>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <p className="w-full text-right">گزارش ماهیانه</p>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => setOpenOrder(!openOrder)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <p className="w-full text-right">فاکتور</p>
          {/* <ListItemText primary="Inbox" /> */}
          {openOrder ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openOrder} timeout="auto" unmountOnExit>
          <List
            onClick={() => {
              navigate("/Bills");
            }}
            component="div"
            disablePadding
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <p className="w-full text-right">لیست</p>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          onClick={() => {
            navigate("/Profile");
          }}
        >
          <ListItemIcon>
            <BadgeOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">پروفایل</p>
        </ListItemButton>
      </List>

      <div className="text-lg font-bold text-amber-600 mb-4 mt-7">
        مدیریت سیستم
      </div>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton
          onClick={() => {
            navigate("/CreateRestaurant");
          }}
        >
          <ListItemIcon>
            <FoodBankOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">ثبت رستوران</p>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ReceiptLongOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">ثبت فاکتور</p>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CreditScoreOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">تعریف اعتبارات</p>
        </ListItemButton>

        <ListItemButton onClick={() => setManagerReport(!openManagerReport)}>
          <ListItemIcon>
            <ManageSearchOutlinedIcon />
          </ListItemIcon>
          <p className="w-full text-right">گزارش سیستم</p>
          {/* <ListItemText primary="Inbox" /> */}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openManagerReport} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShoppingBagOutlinedIcon />
              </ListItemIcon>
              <p className="w-full text-right">گزارش هفتگی</p>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <p className="w-full text-right">گزارش ماهیانه</p>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;

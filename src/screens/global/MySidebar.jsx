import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import avatar from "../../assets/user.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  console.log(title, to, "tovalues");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        {/* <Link to={to} /> */}
      </MenuItem>
    </Link>
  );
};

const menuItemsArray = [
  { title: "Dashboard", icon: <HomeOutlinedIcon />, to: "/" },
  { title: "Manage Team", icon: <PeopleOutlinedIcon />, to: "/team" },
  {
    title: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    to: "/contacts",
  },
  {
    title: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    to: "/invoices",
  },
  { title: "Profile Form", icon: <PersonOutlinedIcon />, to: "/form" },
  { title: "Calender", icon: <CalendarTodayOutlinedIcon />, to: "/calender" },
  { title: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, to: "/faq" },
  { title: "Bar Chart", icon: <BarChartOutlinedIcon />, to: "/bar" },
  { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, to: "/pie" },
  { title: "Line Chart", icon: <TimelineOutlinedIcon />, to: "/line" },
  { title: "Geography Chart", icon: <MapOutlinedIcon />, to: "/geography" },
];
const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={avatar}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "s10px 0 0 0" }}
                >
                  Mani
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP CEO Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items  */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* {menuItemsArray.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                icon={item.icon}
                to={item.to}
                selected={selected}
                setSelected={setSelected}
              />
            ))} */}

            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              to="/invoices"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              to="/form"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              icon={<HelpOutlineOutlinedIcon />}
              to="/faq"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              to="/pie"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              to="/line"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              to="/geography"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MySidebar;

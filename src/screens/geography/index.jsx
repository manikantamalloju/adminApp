import React from "react";
import { Box, colors, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeograpghyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title={"Geograpghy Chart"}
        subtitle={"Simple Geograpghy Chart "}
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRight={"4px"}
      >
        <GeograpghyChart />
      </Box>
    </Box>
  );
};

export default Pie;

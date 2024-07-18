import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./screens/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Team from "./screens/team";
import Contacts from "./screens/contacts";
import Invoices from "./screens/invoices";
import Form from "./screens/form";
import Bar from "./screens/bar";
import Pie from "./screens/pie";
import Line from "./screens/line";
import FAQ from "./screens/faq";
import Geography from "./screens/geography";
import Calendar from "./screens/calendar";
import MySidebar from "./screens/global/MySidebar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" height="100vh">
          <Box width="250px" height="100vh">
            <MySidebar />
          </Box>
          <Box flex={1} display="flex" flexDirection="column">
            <Topbar />
            <Box flex={1} p={2}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

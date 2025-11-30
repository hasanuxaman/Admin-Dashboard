import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flex={1} p={1}>
          {/* Add spacing to offset Navbar height */}
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

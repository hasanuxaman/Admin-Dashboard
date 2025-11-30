import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// YOUR PAGES
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import EntryPage from "./pages/EntryPage";      // ⬅ must import
import ShowPage from "./pages/ShowPage";        // ⬅ must import

function App() {
  return (
    <Router>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flex={1} p={1}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/entry" element={<EntryPage />} />
            <Route path="/slideshow" element={<ShowPage />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

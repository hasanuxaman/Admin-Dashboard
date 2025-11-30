import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
     <Box display="flex">
      <Sidebar />
      <Box flex={1} p={2}>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} /> */}
          </Routes>
     </Box> 
     </Box>
   </Router>
  )
}

export default App

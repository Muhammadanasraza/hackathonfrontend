import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

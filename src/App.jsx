import "./App.css";
import Index from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;

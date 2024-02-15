import "./App.css";
import Index from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import UserPart from "./Pages/Auth/User/Part";
import UserChapter from "./Pages/Auth/User/Chapter";
import UserContent from "./Pages/Auth/User/Content";
import Registration from "./Pages/Auth/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />

        {/* User Section */}
        <Route path="/user/chapter" element={<UserChapter />} />
        <Route path="/user/chapter/:part" element={<UserPart />} />
        <Route path="/user/chapter/:part/:content" element={<UserContent />} />
      </Routes>
    </Router>
  );
}

export default App;

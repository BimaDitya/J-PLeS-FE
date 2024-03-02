import "./App.css";
import Index from "./Pages/Home";
import UserPart from "./Pages/Auth/User/Part";
import UserChapter from "./Pages/Auth/User/Chapter";
import UserContent from "./Pages/Auth/User/Content";
import AdminSubject from "./Pages/Auth/Admin/Subject";
import AdminExercise from "./Pages/Auth/Admin/Exercise";
import AdminDashboard from "./Pages/Auth/Admin/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />

        {/* User Section */}
        <Route path="/user/chapter" element={<UserChapter />} />
        <Route path="/user/chapter/:part" element={<UserPart />} />
        <Route path="/user/chapter/:part/:content" element={<UserContent />} />

        {/* Admin Section */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/subject" element={<AdminSubject />} />
        <Route path="/admin/exercise" element={<AdminExercise />} />
      </Routes>
    </Router>
  );
}

export default App;

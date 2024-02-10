import "./App.css";
import Index from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&family=Fira+Code&family=Ysabeau+Infant:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;

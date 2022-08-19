import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import StartupKit from "./pages/StartupKit.jsx";
import StartupChallenges from "./pages/StartupChallenges.jsx";
import PatentYourBusinessPlan from "./pages/PatentBusinessPlan.jsx";
import PatentImportant from "./pages/PatentImportant.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/startupkit" element={<StartupKit />} />
        <Route path="/startupchallenges" element={<StartupChallenges />} />
        <Route
          path="/patentyourbusinessplan"
          element={<PatentYourBusinessPlan />}
        />
        <Route path="/patentimportant" element={<PatentImportant />} />
      </Routes>
    </>
  );
};

export default App;

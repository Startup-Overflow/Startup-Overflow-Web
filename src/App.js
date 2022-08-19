import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import StartupKit from "./pages/StartupKit.jsx";
import StartupChallenges from "./pages/StartupChallenges.jsx";
import PatentYourBusinessPlan from "./pages/PatentBusinessPlan.jsx";
import PatentImportant from "./pages/PatentImportant.jsx";
import MarketReport from "./pages/MarketReport.jsx";
import StartABusiness from "./pages/StartABusiness.jsx";
import StartupGuide from "./pages/StartupGuide.jsx";
import WomenBusiness from "./pages/WomenBusiness.jsx";
import NariShakti from "./pages/NariShakti.jsx";
import GetPatent from "./pages/GetPatent.jsx";
import FundingGuide from "./pages/FundingGuide.jsx";
import GetRecognized from "./pages/GetRecognized.jsx";
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
        <Route path="/marketreport" element={<MarketReport />} />
        <Route path="/startabusiness" element={<StartABusiness />} />
        <Route path="/startupguide" element={<StartupGuide />} />
        <Route path="/womenbusiness" element={<WomenBusiness />} />
        <Route path="/narishakti" element={<NariShakti />} />
        <Route path="/getpatent" element={<GetPatent />} />
        <Route path="/fundingguide" element={<FundingGuide />} />
        <Route path="/getrecognized" element={<GetRecognized />} />
      </Routes>
    </>
  );
};

export default App;

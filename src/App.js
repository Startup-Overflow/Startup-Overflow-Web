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
import How from "./Posts/How.jsx";
import Goals from "./Posts/Goals.jsx";
import Challenges from "./Posts/Challenges.jsx";
import Gallery from "./pages/Gallery.js";
import WomenEntrepreneur from "./Women/WomenEntrepreneur.jsx";
import About from "./pages/About.jsx";
import Mentors from "./pages/Mentors";
import Partners from "./pages/Partners.js";
import Investors from "./pages/Investors.js";
import Incubators from "./pages/Incubators.js";
import ViewProfile from "./pages/ViewProfile";
import QuestionsRender from "./Q&A/QuestionsRender.jsx";
import Events from "./Events/Events.jsx";
import Entrepreneur from "./Posts/Entrepreneur.jsx";
import Pitch from "./Posts/Pitch.jsx";
import Tracking from "./Posts/Tracking.jsx";
import AskQuestion from "./Q&A/AskQuestion.jsx";
import AddPost from "./Posts/AddPost.jsx";
import BecomeEntrepreneur from "./pages/BecomeEntrepreneur.js";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Startup%20Kit" element={<StartupKit />} />
        <Route path="/Startup%20Challenges" element={<StartupChallenges />} />
        <Route
          path="/Patent%20Your%20Business%20Plan"
          element={<PatentYourBusinessPlan />}
        />
        <Route path="/Importance%20of%20Patent" element={<PatentImportant />} />
        <Route path="/Market%20Reaearch%20Report" element={<MarketReport />} />
        <Route
          path="/How%20to%20Start%20a%20Business%20"
          element={<StartABusiness />}
        />
        <Route path="/Startup%20Guidebook" element={<StartupGuide />} />
        <Route path="/womenbusiness" element={<WomenBusiness />} />
        <Route path="/narishakti" element={<NariShakti />} />
        <Route path="/Get%20Patent" element={<GetPatent />} />
        <Route path="/Funding%20Guide" element={<FundingGuide />} />
        <Route path="/Get%20Recognised" element={<GetRecognized />} />
        <Route path="/37" element={<How />} />
        <Route path="/36" element={<Goals />} />
        <Route path="/35" element={<Challenges />} />

        <Route path="/women-entrepreneurs" element={<WomenEntrepreneur />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/incubators" element={<Incubators />} />
        <Route path="/viewProfile" element={<ViewProfile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Q%20&%20A" element={<QuestionsRender />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/34" element={<Entrepreneur />} />
        <Route path="/33" element={<Pitch />} />
        <Route path="/32" element={<Pitch />} />
        <Route path="/31" element={<Tracking />} />
        <Route path='/askquestion' element={<AskQuestion/>}/>
        <Route path='/addpost' element={<AddPost/>}/>
        <Route path="/becomeentrepreneur" element={<BecomeEntrepreneur />} />
        
      </Routes>
    </>
  );
};
export default App;

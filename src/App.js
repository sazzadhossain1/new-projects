import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import FirstSection from "./components/FirstSection/FirstSection";
import OurStory from "./components/OurStory/OurStory";
import VisionAndMission from "./components/VisionAndMission/VisionAndMission";
import OurTeam from "./components/OurTeam/OurTeam";
import PartnersAndAffiliations from "./components/PartnersAndAffiliations/PartnersAndAffiliations";
import Careers from "./components/Careers/Careers";
import ResearchServices from "./components/ResearchServices/ResearchServices";
import TrainingAndCapacityBuilding from "./components/TrainingAndCapacityBuilding/TrainingAndCapacityBuilding";
import ConsultancyAndAdvisory from "./components/ConsultancyAndAdvisory/ConsultancyAndAdvisory";
import ITAndBPOSolutions from "./components/ITAndBPOSolutions/ITAndBPOSolutions";
import MarketAndImpactStudies from "./components/MarketAndImpactStudies/MarketAndImpactStudies";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";
import CompletedProjects from "./components/CompletedProjects/CompletedProjects";
import ImpactHighlights from "./components/ImpactHighlights/ImpactHighlights";
import Collaborations from "./components/Collaborations/Collaborations";
import UpcomingTrainings from "./components/UpcomingTrainings/UpcomingTrainings";
import Methodology from "./components/Methodology/Methodology";
import OnlineLearning from "./components/OnlineLearning/OnlineLearning";
import IncomeGenerating from "./components/IncomeGenerating/IncomeGenerating";
import Certificate from "./components/Certificate/Certificate";
import ResearchReports from "./components/ResearchReports/ResearchReports";
import PolicyBriefs from "./components/PolicyBriefs/PolicyBriefs";
import BlogsAndThought from "./components/BlogsAndThought/BlogsAndThought";
import ToolsAndDatasets from "./components/ToolsAndDatasets/ToolsAndDatasets";
import AnnualReports from "./components/AnnualReports/AnnualReports";
import PartnerwithUs from "./components/PartnerwithUs/PartnerwithUs";
import JoinOurTraining from "./components/JoinOurTraining/JoinOurTraining";
import BecomeAConsultant from "./components/BecomeAConsultant/BecomeAConsultant";
import VolunteerOpportunities from "./components/VolunteerOpportunities/VolunteerOpportunities";
import LatestNews from "./components/LatestNews/LatestNews";
import EventsAndWebinars from "./components/EventsAndWebinars/EventsAndWebinars";
import MediaCoverage from "./components/MediaCoverage/MediaCoverage";
import OfficeInfo from "./components/OfficeInfo/OfficeInfo";
import GeneralInquiries from "./components/GeneralInquiries/GeneralInquiries";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import RequestAProposal from "./components/RequestAProposal/RequestAProposal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/firstSection",
          element: <FirstSection></FirstSection>,
        },
        {
          path: "/firstSection",
          element: <FirstSection></FirstSection>,
        },
        {
          path: "/ourStory",
          element: <OurStory></OurStory>,
        },
        {
          path: "/visionAndMission",
          element: <VisionAndMission></VisionAndMission>,
        },
        {
          path: "/ourTeam",
          element: <OurTeam></OurTeam>,
        },
        {
          path: "/partnersAndAffiliations",
          element: <PartnersAndAffiliations></PartnersAndAffiliations>,
        },
        {
          path: "/careers",
          element: <Careers></Careers>,
        },
        {
          path: "/researchServices",
          element: <ResearchServices></ResearchServices>,
        },
        {
          path: "/trainingAndCapacityBuilding",
          element: <TrainingAndCapacityBuilding></TrainingAndCapacityBuilding>,
        },
        {
          path: "/consultancyAndAdvisory",
          element: <ConsultancyAndAdvisory></ConsultancyAndAdvisory>,
        },
        {
          path: "/iTAndBPOSolutions",
          element: <ITAndBPOSolutions></ITAndBPOSolutions>,
        },
        {
          path: "/marketAndImpactStudies",
          element: <MarketAndImpactStudies></MarketAndImpactStudies>,
        },
        {
          path: "/ongoingProjects",
          element: <OngoingProjects></OngoingProjects>,
        },
        {
          path: "/completedProjects",
          element: <CompletedProjects></CompletedProjects>,
        },
        {
          path: "/impactHighlights",
          element: <ImpactHighlights></ImpactHighlights>,
        },
        {
          path: "/collaborations",
          element: <Collaborations></Collaborations>,
        },
        {
          path: "/upcomingTrainings",
          element: <UpcomingTrainings></UpcomingTrainings>,
        },
        {
          path: "/methodology",
          element: <Methodology></Methodology>,
        },
        {
          path: "/onlineLearning",
          element: <OnlineLearning></OnlineLearning>,
        },
        {
          path: "/incomeGenerating",
          element: <IncomeGenerating></IncomeGenerating>,
        },
        {
          path: "/Certificate",
          element: <Certificate></Certificate>,
        },
        {
          path: "/researchReports",
          element: <ResearchReports></ResearchReports>,
        },
        {
          path: "/PolicyBriefs",
          element: <PolicyBriefs></PolicyBriefs>,
        },
        {
          path: "/blogsAndThought",
          element: <BlogsAndThought></BlogsAndThought>,
        },
        {
          path: "/toolsAndDatasets",
          element: <ToolsAndDatasets></ToolsAndDatasets>,
        },
        {
          path: "/annualReports",
          element: <AnnualReports></AnnualReports>,
        },
        {
          path: "/partnerwithUs",
          element: <PartnerwithUs></PartnerwithUs>,
        },
        {
          path: "/joinOurTraining",
          element: <JoinOurTraining></JoinOurTraining>,
        },
        {
          path: "/becomeAConsultant",
          element: <BecomeAConsultant></BecomeAConsultant>,
        },
        {
          path: "/volunteerOpportunities",
          element: <VolunteerOpportunities></VolunteerOpportunities>,
        },
        {
          path: "/latestNews",
          element: <LatestNews></LatestNews>,
        },
        {
          path: "/eventsAndWebinars",
          element: <EventsAndWebinars></EventsAndWebinars>,
        },
        {
          path: "/mediaCoverage",
          element: <MediaCoverage></MediaCoverage>,
        },
        {
          path: "/OfficeInfo",
          element: <OfficeInfo></OfficeInfo>,
        },
        {
          path: "/generalInquiries",
          element: <GeneralInquiries></GeneralInquiries>,
        },
        {
          path: "/workWithUs",
          element: <WorkWithUs></WorkWithUs>,
        },
        {
          path: "/requestAProposal",
          element: <RequestAProposal></RequestAProposal>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

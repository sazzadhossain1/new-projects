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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import FirstSection from "./components/FirstSection/FirstSection";

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

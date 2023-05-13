import "./App.scss";
// import Navbar from "./components/UI/navigation/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutCompany from "./components/pages/about_company/AboutCompany";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";
import Questions from "./components/pages/questions/Questions";
import Admin from "./components/admin/Admin";
import RootLayout from "./components/pages/Root";

const router = createBrowserRouter([
  {
    path: "/triacom-new-site",
    element: <RootLayout />,
    children: [
      { path: "/triacom-new-site", element: <MainPage /> },
      { path: "/triacom-new-site/about-company", element: <AboutCompany /> },
      { path: "/triacom-new-site/questions", element: <Questions /> },
      { path: "/triacom-new-site/contacts", element: <Contacts /> },
    ],
  },
  {
    path: "/triacom-new-site/admin",
    element: <Admin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

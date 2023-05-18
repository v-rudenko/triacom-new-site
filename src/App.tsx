import "./App.scss";
// import Navbar from "./components/UI/navigation/Navbar";

import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import History from "./components/pages/about_company/History";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";
import Questions from "./components/pages/questions/Questions";
import Admin from "./components/admin/Admin";
import RootLayout from "./components/pages/Root";
import Internet from "./components/pages/services/internet/Internet";
import Documents from "./components/pages/about_company/Documents";
import Reports from "./components/pages/about_company/Reports";

// const PATH = "/triacom-new-site"
const PATH = "/";
// const PATH = "v-rudenko.github.io/triacom-new-site/"

const router = createHashRouter([
  {
    path: PATH,
    element: <RootLayout />,
    children: [
      // Navbar
      { path: PATH, element: <MainPage /> },
      { path: PATH + "/history", element: <History /> },
      { path: PATH + "/documents", element: <Documents /> },
      { path: PATH + "/reports", element: <Reports /> },
      { path: PATH + "/questions", element: <Questions /> },
      { path: PATH + "/contacts", element: <Contacts /> },
      // ПОСЛУГИ
      { path: PATH + "/internet", element: <Internet /> },
    ],
  },
  {
    path: PATH + "/admin",
    element: <Admin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

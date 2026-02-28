import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./components/HomePage";
import { AccountPage } from "./components/AccountPage";
import { NotificationsPage } from "./components/NotificationsPage";
import { AcademicsPage } from "./components/AcademicsPage";
import { AdmissionsPage } from "./components/AdmissionsPage";
import { CampusLifePage } from "./components/CampusLifePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "account", Component: AccountPage },
      { path: "notifications", Component: NotificationsPage },
      { path: "academics", Component: AcademicsPage },
      { path: "admissions", Component: AdmissionsPage },
      { path: "campus", Component: CampusLifePage },
    ],
  },
]);

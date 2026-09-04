import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "../pages/HomePage";
import { AccountPage } from "../pages/AccountPage";
import { NotificationsPage } from "../pages/NotificationsPage";
import { AcademicsPage } from "../pages/AcademicsPage";
import { AdmissionsPage } from "../pages/AdmissionsPage";
import { CampusLifePage } from "../pages/CampusLifePage";

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

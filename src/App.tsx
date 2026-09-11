import { RouterProvider } from "react-router";
import { router } from "./app/routes";
import { ThemeProvider } from "./components/common/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

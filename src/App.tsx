import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import * as pages from "./pages";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<pages.Home />} />
      </Route>
    </Routes>
  );
}

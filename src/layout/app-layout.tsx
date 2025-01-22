import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

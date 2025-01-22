import { NavItems } from "@/data/data";
import Topbar from "./topbar";
import { NavLink } from "react-router-dom";
import { Heart, Search, ShoppingCart } from "lucide-react";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  return (
    <div className="border border-b-2 border-t-0 border-r-0 border-l-0">
      <Topbar />
      <div className="container font-poppins">
        <nav className="flex justify-around items-center py-4">
          <h1 className="font-extrabold font-poppins">EXCLUSIVE</h1>
          <ul className="md:flex gap-6 hidden">
            {NavItems.map((item) => {
              return (
                <li key={item.navLink}>
                  <NavLink
                    to={item.navLink}
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    {item.navName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4 items-center justify-center">
            <div className="relative md:flex items-center hidden">
              <input
                type="text"
                placeholder="what are you looking for?"
                className="py-2 px-8 rounded-md md:text-sm text-xs bg-[#f5f5f5]"
              />
              <div className="absolute right-2 top-2 ">
                <Search size={20} />
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <Heart size={20} className="cursor-pointer" />
              <ShoppingCart size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="md:hidden flex justify-center items-center mt-2">
            <MobileNav />
          </div>
        </nav>
      </div>
    </div>
  );
}

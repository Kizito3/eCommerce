import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItems } from "@/data/data";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <div className="text-start mb-6">
              <h1 className="text-2xl font-extrabold font-poppins">
                EXCLUSIVE
              </h1>
            </div>
            <ul className="flex gap-12 flex-col justify-start text-start mt-14">
              {NavItems.map((item) => {
                return (
                  <li key={item.navLink}>
                    <NavLink
                      to={item.navLink}
                      className={({ isActive }) =>
                        isActive ? "underline text-xl" : "text-xl"
                      }
                    >
                      {item.navName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

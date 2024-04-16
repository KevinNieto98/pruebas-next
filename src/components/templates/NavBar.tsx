'use client'
import { useUIStore } from '@/store';

import { IoMenu } from "react-icons/io5";
import { NavbarButton, NavbarLogo } from "../atoms";
import { NavbarContainer } from "../molecules";



export const Navbar = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="bg-blue-900  w-full top-0 start-0 border-b ">
      <div className="flex  px-2 py-1">
          <button
              onClick={openSideMenu}
              className=" p-2 rounded-md transition-all text-white hover:bg-blue-950"
          >
            <IoMenu />
          </button>

          
          <NavbarLogo/>
          <NavbarContainer/>
      </div>
    </nav>
  );
};
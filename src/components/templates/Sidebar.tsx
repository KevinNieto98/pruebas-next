'use client'
import Link from "next/link";
import {
  IoBarChart,
  IoBookOutline,
  IoCartOutline,
  IoCloseOutline,
  IoHomeOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShieldOutline,
  IoShirtOutline,
  IoSpeedometerOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { SidebarItem } from "../atoms";
import { useUIStore } from "@/store";


export const Sidebar = () => {
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  
  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 right-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm drop-shadow-xl"
        />
      )}
        {/* <div className="fixed top-0 right-0 w-screen h-screen z-10 bg-black opacity-10" /> */}

      {/* Sidemenu */}
      {isSideMenuOpen && (
            <nav
                className="fixed p-1 left-0 top-0 w-[250px] h-screen bg-blue-900 z-20 shadow-2xl transform transition-all duration-300"
            >
              <button 
                onClick={closeSideMenu}
                className=" w-full flex justify-end top-1 right-1 cursor-pointer">
                  <IoCloseOutline
                      size={25}
                      className="text-white"
                  />
              </button>
       
              {/* Menú */}
              <div className="my-30">
                <SidebarItem  icon={<IoHomeOutline size={20}/>} name="Home" />
                <SidebarItem  icon={<IoSpeedometerOutline size={20}/>} name="Dashboard de Rendimiento" />
                <SidebarItem  icon={<IoPeopleOutline size={20}/>} name="Portal de Tigo Peopel" />
                <SidebarItem  icon={<IoShieldOutline size={20}/>} name="Seguridad" />
                <SidebarItem  icon={<IoBarChart size={20}/>} name="Facturación" />
                <SidebarItem  icon={<IoCartOutline size={20}/>} name="Gestor de Ventas" />
              
              </div>
      
            </nav>
          )}



    </div>
  );
};
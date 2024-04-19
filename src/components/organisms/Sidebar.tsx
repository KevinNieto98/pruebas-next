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
            <nav
                className=" p-1 left-0 top-0 w-[250px] h-screen bg-sky-100 z-20  transform transition-all duration-300"
            >
              <button 
                onClick={closeSideMenu}
                className=" w-full justify-end top-1 right-1 cursor-pointer">
                  <IoCloseOutline
                      size={25}
                      className="text-blue-950"
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
    </div>
  );
};
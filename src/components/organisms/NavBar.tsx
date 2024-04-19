'use client'
import { useUIStore } from '@/store';
import { NavbarLogo } from "../atoms";
import { NavbarContainer } from "../molecules";
import { BsDatabaseUp } from 'react-icons/bs';
import { SeedData } from '@/interfaces';
import { DropdownButton } from '..';
import { initialData } from '@/seed';


export const Navbar = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const { categories } = initialData

  return (
    <nav className="bg-blue-900  w-full top-0 start-0 border-b  grid grid-rows-1">
      <div className="flex  px-2 py-1 ">
        <NavbarLogo />
        <NavbarContainer />
      </div>
      <div className="flex  px-2 py-1 ">
        <div className=" w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0  ">
            {
              categories.map(categories => (
                <DropdownButton
                  key={categories.codigo}
                  name={categories.name}
                />
              ))
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};
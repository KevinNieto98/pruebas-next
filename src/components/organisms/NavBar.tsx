'use client'
import { useUIStore } from '@/store';
import { NavbarLogo } from "../atoms";
import { NavbarContainer } from "../molecules";
import { BsDatabaseUp } from 'react-icons/bs';
import { SeedData } from '@/interfaces';
import { DropdownButton } from '..';
import { initialData } from '@/seed';


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon.jsx";


export const NavBar = () => {
  // const openSideMenu = useUIStore((state) => state.openSideMenu);
  // const { categories } = initialData

  return (
    <Navbar className="bg-blue-900 w-full top-0 start-0 border-b grid-rows-1 flex items-center">
    <NavbarContent justify="start">
      <NavbarBrand className="mr-2 flex items-center">
        <NavbarLogo />
        <NavbarContainer />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-3">
        {/* <NavbarItem>
          <Link color="success" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
    </NavbarContent>

    <NavbarContent as="div" className="items-center" justify="end">
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
        type="search"
      />
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name="Jason Hughes"
            size="sm"
            src="/imgs/perfil.png"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </Navbar>

  
    // <nav className="bg-blue-900  w-full top-0 start-0 border-b  grid grid-rows-1">
    //   <div className="flex  px-2 py-1 ">
    //     <NavbarLogo />
    //     <NavbarContainer />
    //   </div>
    //   <div className="flex  px-2 py-1 ">
    //     <div className=" w-full md:block md:w-auto" id="navbar-dropdown">
    //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0  ">
    //         {
    //           categories.map(categories => (
    //             <DropdownButton
    //               key={categories.codigo}
    //               name={categories.name}
    //             />
    //           ))
    //         }

    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
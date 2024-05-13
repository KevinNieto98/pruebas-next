'use client'
import { useUIStore } from '@/store';
import { NavbarLogo } from "../atoms";
import { NavbarContainer } from "../molecules";
import { BsDatabaseUp } from 'react-icons/bs';
import { SeedData } from '@/interfaces';
import { DropdownButton } from '..';
import { initialData } from '@/seed';


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button, Switch} from "@nextui-org/react";

import { FaHeart, FaMoon, FaStream } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';
import { GoSun } from 'react-icons/go';
import SwitchDarkMode from './SwitchDarkMode';
import { CiSearch } from 'react-icons/ci';


export const NavBar = () => {
  // const openSideMenu = useUIStore((state) => state.openSideMenu);
  // const { categories } = initialData

  return (
    <Navbar className="bg-blue-900 w-full top-0 start-0 border-b grid-rows-1 flex items-center">
    <NavbarContent justify="start">
      <NavbarBrand className="mr-2 flex items-center">
        <NavbarLogo />
        {/* <NavbarContainer /> */}

    {/* ------------------------Áreas-------------------------------------- */}
    <div className='mr-2'>
    <Dropdown>
      <DropdownTrigger>
        
      <Button color="primary" endContent={<FaStream/>}>
        Áreas
      </Button>   
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="B2C">B2C</DropdownItem>
        <DropdownItem key="B2B">B2B</DropdownItem>
        <DropdownItem key="SS">Shared Services</DropdownItem>
        <DropdownItem key="SO">Sales Operations</DropdownItem>
        {/* <DropdownItem key="SO" className="text-danger" color="danger">
          Delete file
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
    </div>

    {/* ------------------------Favoritos-------------------------------------- */}
    <div className='mr-2'>
    <Dropdown>
      <DropdownTrigger>
      <Button isIconOnly variant="flat" aria-label="Like" className='color="#E6F1FE"' >
        <FaHeart style={{ color: "#FFFFFF" }}/>
      </Button>  
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>

     {/* ------------------------Notificaciones-------------------------------------- */}
     <div className='mr-2'>
     <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="flat" aria-label="Like" className='color="#E6F1FE"'>
          <IoNotifications style={{ color: "#FFFFFF" }}/>
        </Button>  
      </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-3">
      </NavbarContent>
    </NavbarContent>

    <NavbarContent as="div" className="items-center" justify="end">

    <Input
    classNames={{
      base: "max-w-[5rem] sm:max-w-full h-10", 
      mainWrapper: "h-full",
      input: "text-small",
      inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
    }}
    placeholder="Ingrese la página a buscar"
    size="sm"
    startContent={<CiSearch size={18} width={undefined} height={undefined} />}
    type="search"
    />

      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name=""
            size="sm"
            src="/imgs/perfil.png"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Inició sesión como</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">Mi perfil</DropdownItem>
          <DropdownItem>
            <SwitchDarkMode/>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Cerrar sesión
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
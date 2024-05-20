'use client'

import { Navbar, NavbarBrand,Input, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Avatar, Button, Switch, Select, SelectItem, useDisclosure, Badge } from "@nextui-org/react";

import { FaHeart, FaLightbulb, FaMoon, FaStream } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { initialData } from "@/seed";
import { NavbarActions, NavbarDropdown, NavbarLogo, NavbarProfile, SwitchDarkMode } from "@/components";



export const NavBar = () => {
  const { menuItem } = initialData

  console.log(menuItem);
  
  const so = [
    { value: 'ICS', label: 'ICS' },
    { value: 'DMS', label: 'DMS' },
    { value: 'Comisiones', label: 'Comisiones' },
    { value: 'S&OP', label: 'S&OP' },
    { value: 'Operaciones Comerciales', label: 'Operaciones Comerciales' },
    { value: 'Soporte Comercial y de Sistemas', label: 'Soporte Comercial y de Sistemas' },
  ];

  // Elementos del menú B2C
  const b2c = [
    { value: 'Prepago', label: 'Prepago' },
    { value: 'Home', label: 'Home' },
    { value: 'Pospago GTM', label: 'Pospago GTM' },
    { value: 'Negocios de Suscripción', label: 'Negocios de Suscripción' },
  ];


  const variants = ['normal', 'filled', 'outlined', 'underlined'];

  return (
    <Navbar className="bg-blue-900 flex px-5 justify-between items-center mb-5 w-full">

      {/* Primer div: Alineado a la izquierda */}
      <div className="flex items-center justify-start">
        <NavbarLogo />

        <div className='mr-2'>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                disableRipple
                className="color=#E6F1FE bg-transparent hover:bg-blue-950 rounded-xl"
                endContent={<FaStream style={{ color: 'white' }} />}
                radius="sm"

                style={{ color: 'white' }}
              >
                Áreas
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Static Actions">

              {/* ----------------------------- Menú SO ------------------------------------*/}
              <DropdownItem key="SO">
                <Select
                  label="Sales Operations"
                  className="max-w-xs"
                >
                  {so.map((so) => (
                    <SelectItem key={so.value} value={so.value}>
                      {so.label}
                    </SelectItem>
                  ))}
                </Select>
              </DropdownItem>

              {/* ----------------------------- Menú B2C ------------------------------------*/}
              <DropdownItem key="B2C">
                <Select
                  label="B2C"
                  className="max-w-xs"
                >
                  {b2c.map((b2c) => (
                    <SelectItem key={b2c.value} value={b2c.value}>
                      {b2c.label}
                    </SelectItem>
                  ))}
                </Select>
              </DropdownItem>

              {/* <DropdownItem key="B2B">B2B</DropdownItem>
              <DropdownItem key="SS">Shared Services</DropdownItem>
              <DropdownItem key="SO">Sales Operations</DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </div>



      </div>

      {/* Segundo div: Centrado */}
      <div className="flex items-center justify-center flex-grow">
        <Input
          classNames={{
            base: "max-w-[30rem] sm:max-w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Ingrese la página a buscar"
          size="sm"
          startContent={<CiSearch size={18} width={undefined} height={undefined} />}
          type="search"
        />
      </div>

      {/* Tercer div: Alineado a la derecha */}
      <div className="flex items-center justify-end">
          <NavbarActions/>
          <NavbarProfile/>

      </div>

    </Navbar>

  );
};
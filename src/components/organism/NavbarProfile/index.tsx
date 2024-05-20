import { Icons } from '@/components/atoms';
import { NavbarDropdown } from '@/components/molecules';
import { menuItem } from '@/interfaces';
import { initialData } from '@/seed';
import { Avatar, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarBrand } from '@nextui-org/react';
import { SwitchDarkMode } from '@/components';



export const NavbarProfile = () => {
    const { menuItem } = initialData
    console.log(menuItem);
    return (
        <Dropdown>
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
              <SwitchDarkMode />
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    );
};

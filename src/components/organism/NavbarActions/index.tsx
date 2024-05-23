import { Icons, NavbarDrawer, NavbarDropdown } from '@/components';
import { initialData } from '@/seed';
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarBrand } from '@nextui-org/react';



export const NavbarActions = () => {
    const { menuItem } = initialData
    //console.log(menuItem);
    return (
      <div className='mx-5'>
        <NavbarBrand>
          {/* ------------------------Notificaciones-------------------------------------- */}
          <div className=''>
            <Dropdown>
              <DropdownTrigger>
                <Badge content="5" color="danger">
                  <Button
                    isIconOnly
                    variant="flat"
                    aria-label="Like"
                    className="color=#E6F1FE bg-transparent hover:bg-blue-950 rounded-xl"
                  >
                     <Icons name = "IoNotifications" style={{ color: "#FFFFFF" }} />
                  </Button>
                </Badge>

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
          {menuItem.map((menuItem) => (
            <NavbarDropdown key={menuItem.key}
              icon={menuItem.icon}
              name={menuItem.name}
              subMenuItem={menuItem.subMenuItem}
            >
              </NavbarDropdown>
            ))}
          <NavbarDrawer/>

        </NavbarBrand>
      </div>
    );
};

import { Icons } from '@/components/atoms';
import { menuItem } from '@/interfaces';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';



export const NavbarDropdown = ({icon,name,subMenuItem}:menuItem) => {
    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        isIconOnly
                        variant="flat"
                        aria-label="Like"
                        className="color=#E6F1FE bg-transparent hover:bg-blue-950 rounded-xl"
                    >
                        <Icons name = {icon} style={{ color: "#FFFFFF" }} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    {subMenuItem.map((subMenuItem) => (
                        <DropdownItem key={subMenuItem.id}>{subMenuItem.name}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </>
    );
};

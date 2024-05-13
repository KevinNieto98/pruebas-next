import { IoPower, IoPersonOutline, IoMegaphoneOutline, IoHelpSharp } from "react-icons/io5";
import { NavbarItem } from "../atoms";

export const NavbarContainer = () => {

    return (
        <div className="w-full flex justify-end px-4">
            <ul className="flex flex-col text-xs mt-4 border text-white md:space-x-2 md:flex-row md:mt-0 md:border-0 items-center">
                <NavbarItem icon={<IoHelpSharp />} name="Ayuda" />
                <NavbarItem icon={<IoMegaphoneOutline />} name="Comunicados: 0" />
                <NavbarItem icon={<IoPersonOutline />} name="Kevin Alexis" />
                {/* <NavbarItem icon={<IoPower />} name="Cerrar Sesión" /> */}
                
            </ul>
        </div>

    );
};
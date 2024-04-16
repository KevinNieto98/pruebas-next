'use client'
import { useUIStore } from '@/store';
import { IoMenu } from 'react-icons/io5';


export const NavbarButton = () => {
    const openSideMenu = useUIStore((state) => state.openSideMenu);
    return (
        <button
            onClick={openSideMenu}
            className=" p-2 rounded-md transition-all text-white hover:bg-blue-950"
        >
            <IoMenu />
        </button>

    );
};
import Image from 'next/image';
import Link from 'next/link';
import { IoPersonOutline } from 'react-icons/io5';

interface Props {
    icon: JSX.Element;
    name: string;
}

export const SidebarItem = ({ icon, name  }: Props) => {
    return (
        <Link
        href="/profile"
        className="flex items-center  py-1 px-2  hover:bg-blue-950 rounded transition-all"
      >
        <div className=" text-white">
            {icon}
        </div>
        <span className="ml-2 py-2 text-sm text-white">{name}</span>
      </Link>
    );
};
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    icon: JSX.Element;
    name: string;

}

export const DropdownItem = ({ icon, name  }: Props) => {
    return (
        <li>
        <Link href="#" className="px-3 py-1 flex text-blue-950 hover:bg-blue-950  hover:text-white " > 
          <div className="pt-1 px-1">{icon}</div>{name}</Link>
      </li>
    );
};
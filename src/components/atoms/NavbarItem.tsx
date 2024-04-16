import Image from 'next/image';
import Link from 'next/link';

interface Props {
    icon: JSX.Element;
    name: string;
    width?: number;
    height?: number;
}

export const NavbarItem = ({ icon, name,  width = 10, height = 10  }: Props) => {
    return (
        <li className='hover:bg-blue-950 px-1 rounded'>
            <Link href="/" className="py-2 text-white flex flex-wrap">
                {/* Establecer las dimensiones del icono */}
                <div style={{ width, height }} className="py-0.5">
                    {icon}
                </div>
                <span className='mx-1'>{name}</span>
            </Link>
        </li>
    );
};
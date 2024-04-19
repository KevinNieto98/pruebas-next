import Image from 'next/image';
import Link from 'next/link';
import { PiChartLineUpLight } from 'react-icons/pi';

interface Props {
    icon ?: JSX.Element;
    name : string;
    codigo : string;

}

export const Card = ({ icon, name, codigo  }: Props) => {
    return (
        <div className=" w-72 h-36 rounded-lg flex flex-col drop-shadow-lg">
            <div className="bg-blue-500 flex-grow rounded-t-lg flex justify-center items-center">
            <div className="w-16 h-16 bg-black bg-opacity-30 text-white flex justify-center items-center rounded-full">
                <PiChartLineUpLight/>
            </div>
            </div>
            <div className="bg-white flex-grow rounded-b-lg flex flex-col justify-center items-center">
            <span className="text-sm font-semibold">{name}</span>
            <span className="text-xs font-normal">{codigo}</span>
            </div>
        </div>
    );
};
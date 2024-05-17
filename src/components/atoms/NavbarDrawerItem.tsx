import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { FaLightbulb } from 'react-icons/fa';


interface Props {
    //icon: JSX.Element;
    name: string;
    descripcion: string;
}

export const NavbarDrawItem = ({ name, descripcion }: Props) => {
    return (
        <Card shadow="sm" isPressable onPress={() => console.log("Ir a portal")} className="max-w mt-2 mb-4">
        <CardHeader className="bg-blue-900 flex gap-3 text-white">
          {/* <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          /> */}
          <FaLightbulb /> 
          <div className="flex flex-col">
            <p className="text-md">{name}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="text-sm">
          {descripcion}
        </CardBody>
        <Divider/>
        {/* <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://so.tigo.com.hn/"
          >
            Ir a página.
          </Link>
        </CardFooter> */}
      </Card>
    );
};
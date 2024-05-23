import React from "react";
import {Button, Card, CardHeader, CardBody, Divider, Listbox, ListboxItem} from "@nextui-org/react";
import { FaLightbulb, FaRegTrashAlt, FaHeart } from 'react-icons/fa';

interface Props {
    //icon: JSX.Element;
    tipo: string;
    name: string;
    descripcion: string;
}

export const NavbarDrawItem = ({ name, descripcion, tipo }: Props) => {
  if (tipo == 'pag_interes') {
    return (
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-1">
        <Card shadow="sm" isPressable onPress={() => console.log("Ir a portal") } className="max-w mt-2 mb-4">
        <CardHeader className="bg-blue-900 flex gap-3 text-white">
          <FaLightbulb /> 
          <div className="flex flex-col">
            <p className="text-md">{name}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="text-sm">
          {descripcion}
        </CardBody>
        </Card>
      </div>
    );
  } else if (tipo == 'pag_favoritas') {
    return (
      <Listbox
      aria-label="User Menu"
      onAction={(key) => alert('Ir a página favorita.')}
      className="p-0 mb-4 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-blue-700",
      }}
      >
        <ListboxItem
            key="issues"
            className="w-full bg-blue-900"
            endContent={
                <div className="flex gap-4 items-center">
                    <Button isIconOnly onPress={() => alert('Eliminar favorito')}>
                      <div className=" rounded-t-medium bg-gray-200 gap-3 p-3">
                        <FaRegTrashAlt className="text-danger"></FaRegTrashAlt>
                      </div>
                    </Button> 
                </div>
            }
            startContent={
              <span className="text-white">{name}</span>
              // <FaHeart className="text-white">
              // </FaHeart>
            }
        >
        </ListboxItem>
  </Listbox>
  );
}
};
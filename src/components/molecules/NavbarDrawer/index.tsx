'use client'

import { useState } from "react";
import { FaLightbulb, FaHeart, FaRegTrashAlt } from 'react-icons/fa';
import { Button, Divider, Listbox, ListboxItem, Link } from "@nextui-org/react";
import { NavbarDrawItem } from "@/components";
import { Box, Drawer, Typography } from "@mui/material";


interface Props {
    //icon: JSX.Element;
    action: string;
}


export const NavbarDrawer = ( { action } : Props ) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    if (action == 'pag_interes') {
        return (
            <>
                <Button
                    isIconOnly
                    variant="flat"
                    aria-label="Like"
                    className="color=#E6F1FE bg-transparent hover:bg-blue-950 rounded-xl"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <FaLightbulb style={{ color: "#FFFFFF" }} />
                </Button>
                <Drawer
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    PaperProps={{
                        sx: { width: "25%" },
                    }}
                >
                    <Box p={2} textAlign='center' role='presentation' className="w-full">
                        <Typography variant='h6' component='div'>
                            Páginas de interes
                        </Typography>
                        <Divider />
                        <NavbarDrawItem tipo={'pag_interes'} name={'Portal De Beneficio De Empleados'} descripcion={'Breve descripción de portal de beneficio de empleados.'}/>
                        <NavbarDrawItem tipo={'pag_interes'} name={'Portal De Registro De Escritorios'} descripcion={'Breve descripción de portal de registro de escritorios.'}/>
                        <NavbarDrawItem tipo={'pag_interes'} name={'Portal De Estacionamiento'} descripcion={'Breve descripción de portal de estacionamiento'}/>
                        <NavbarDrawItem tipo={'pag_interes'} name={'Portal De Emergencias Tigo'} descripcion={'Breve descripción de portal de emergencias tigo'}/>
                    </Box>
                </Drawer>
            </>
        );
    } else if (action == 'pag_favoritas') {
        return (
            <>
                <Button
                    isIconOnly
                    variant="flat"
                    aria-label="Like"
                    className="color=#E6F1FE bg-transparent hover:bg-blue-950 rounded-xl"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <FaHeart style={{ color: "#FFFFFF" }} />
                </Button>
                <Drawer
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    PaperProps={{
                        sx: { width: "25%" },
                    }}
                >
                    <Box p={2} textAlign='center' role='presentation' className="w-full">
                        <Typography variant='h6' component='div'>
                            Mis páginas favoritas.
                        </Typography>
                        <Divider className="mb-4"></Divider>
                        <NavbarDrawItem tipo={'pag_favoritas'} name={'Página favorita 1.'} descripcion={''}/>
                        <NavbarDrawItem tipo={'pag_favoritas'} name={'Página favorita 2.'} descripcion={''}/>
                        <NavbarDrawItem tipo={'pag_favoritas'} name={'Página favorita 3.'} descripcion={''}/>
                        <NavbarDrawItem tipo={'pag_favoritas'} name={'Página favorita 4.'} descripcion={''}/>    
                    </Box>
                </Drawer>
            </>
        );   
    }
};
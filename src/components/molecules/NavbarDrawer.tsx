// import { IoPower, IoPersonOutline, IoMegaphoneOutline, IoHelpSharp } from "react-icons/io5";
import { NavbarDrawItem } from "../atoms";
import { Drawer, Box, Typography, Divider } from "@mui/material"
import { useState } from "react";
import { FaLightbulb } from 'react-icons/fa';
import { Button } from "@nextui-org/react";

export const NavbarDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
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
                    sx: { width: "20%" },
                }}            >
                <Box p={2} textAlign='center' role='presentation' className="max-w">
                    <Typography variant='h6' component='div'>
                        Páginas de interes
                    </Typography>
                    <Divider />
                    <NavbarDrawItem name={'Portal De Beneficio De Empleados'} descripcion={'Breve descripción de portal de beneficio de empleados.'}/>
                    <NavbarDrawItem name={'Portal De Registro De Escritorios'} descripcion={'Breve descripción de portal de registro de escritorios.'}/>
                    <NavbarDrawItem name={'Portal De Estacionamiento'} descripcion={'Breve descripción de portal de estacionamiento'}/>
                    <NavbarDrawItem name={'Portal De Emergencias Tigo'} descripcion={'Breve descripción de portal de emergencias tigo'}/>
                </Box>
            </Drawer>
        </>
    );
};
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from 'next/image'

export default function ModalProducto(props) {

    const { producto, modal, setModal } = props

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '48vh',
        bgcolor: 'white',
        // border: '2px solid #000',
        boxShadow: 24,
       borderRadius: '25px'
    };


    return (
        <div>
            <Modal open={modal} onClose={() => setModal(false)}>
                <Box sx={style}>
                    <Box>
                        <Typography variant='h4' align="center" sx={{ mt: 2 }}>{producto.nombre_comercial || producto.producto}</Typography>
                    </Box>
                    {producto.imagen ? <Box display='flex' justifyContent='center'>
                        <Box sx={{ mb: 3, mt: 2  }} width='48vh'>
                            <Box height='48vh' width='48vh' sx={{ position: "relative" }}>
                                <Image
                                    alt="Image Alt"
                                    src={producto.imagen} 
                                    layout="fill"
                                    objectFit="cover" // Scale your image down to fit into the container
                                    
                                />
                            </Box>
                        </Box>
                    </Box> :
                    <Box sx={{ my: 1 }}/>}
                    
                    {producto.descripcion && <Box>
                        <Typography variant='h6' align="center" sx={{ mb: 3, fontStyle: 'italic' }}>{producto.descripcion}</Typography>
                    </Box>}
                </Box>
            </Modal>
        </div>
    )
}
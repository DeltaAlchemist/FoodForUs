import React, { useState } from 'react';
import ModalDialog from '../Menu/ModalDialog';

export const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <div className="ui large top fixed hidden menu"> 
            <div className="ui container">
                <a className="active item">Home</a>
                <a className="">Produtos</a>
            </div>
            <div className="right menu">
                <div className="item">
                    <a className="ui button">Log in</a>
                </div>
                <div className="item">
                    <a 
                        className="ui primary button" 
                        style={{ marginLeft: '2px' }}
                        onClick={handleOpen}
                    >Registrar</a>
                </div>
            </div>
            <ModalDialog open={open} handleClose={handleClose} />
        </div>
    );
}
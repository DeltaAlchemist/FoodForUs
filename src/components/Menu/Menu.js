import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../img/logo.png";
import ModalDialog from './ModalDialog';

const MenuDiv = styled.div`
    img {
        width: 100px;
        margin-right: 15px;
    }

`

export const Menu = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <MenuDiv>
            <div className="ui large secondary inverted pointing menu">
                <img src={Logo} alt="logo"/>
                <a className="active item">Home</a>
                <a className="item">Symbot</a>
                <a className="item">Artigos</a>
                <a className="item">Contato</a>
                <a className="item">Sobre</a>
                <div className="right item">
                    <a className="ui inverted button">Log in</a>
                    <a 
                        className="ui inverted button" 
                        style={{ marginLeft: '7.5px' }}
                        onClick={handleOpen}
                    >Registrar</a>
                </div>
            </div>
            <ModalDialog open={open} handleClose={handleClose}/>
        </MenuDiv>
    )
}
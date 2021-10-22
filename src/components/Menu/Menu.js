import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../img/logo.png";
import {ModalDialog, ModalLogin} from './ModalDialog';
import { Link } from "react-router-dom";

const MenuDiv = styled.div`
    img {
        width: 100px;
        margin-right: 15px;
    }
    background-color: '#1b1c1d';
`

export const Menu = () => {

    const [openSignUp, setOpenSignUp] = useState(false);

    const handleOpenSignUp = () => {
        setOpenSignUp(true)
    }

    const handleCloseSignUp = () => {
        setOpenSignUp(false)
    }

    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true)
    }

    const handleCloseLogin = () => {
        setOpenLogin(false)
    }


    return(
        <MenuDiv style={{ backgroundColor: '#1b1c1d' }}>
            <div className="ui container">
                <div className="ui inverted vertical masthed center aligned segment" style={{ display: 'block' }}>
                    <div className="ui large secondary inverted pointing menu" style={{ backgroundColor:"#1b1c1d"}}>
                        <img src={Logo} alt="logo"/>
                        <a className="active item"> <Link to = '/'>Home </Link></a>
                    <a className="item"> <Link to = '/symbot'>Raposym </Link></a>
                    <a className="item"> <Link to = '/artigos'>Artigos </Link></a>
                    <a className="item"> <Link to = '/contato'>Contato </Link></a>
                    <a className="item"> <Link to = '/sobre'>Sobre </Link></a>
                        <div className="right item">
                            <a className="ui inverted button"
                            style={{ marginLeft: '7.5px' }}
                            onClick={handleOpenLogin}
                            
                            >Log in</a>
                            <a 
                                className="ui inverted button" 
                                style={{ marginLeft: '7.5px' }}
                                onClick={handleOpenSignUp}
                            >Registrar</a>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDialog open={openSignUp} handleClose={handleCloseSignUp}/>
            <ModalLogin open={openLogin} handleClose={handleCloseLogin}/>
        </MenuDiv>
    )
}
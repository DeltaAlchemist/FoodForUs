import React from "react";
import styled from "styled-components";
import Logo from "../../img/logo.png";

const MenuDiv = styled.div`
    img {
        width: 100px;
        margin-right: 15px;
    }

`

export const Menu = () => {
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
                <a className="ui inverted button" style={{ marginLeft: '7.5px' }}>Registrar</a>
            </div>
        </div>
        </MenuDiv>
    )
}
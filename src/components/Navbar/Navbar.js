import React, { useState } from 'react'

import useStyles from './Navbar.style';

export const Navbar = () => {

    return(
        <div className="ui large top fixed hidden menu"> 
            <div className="ui container">
                <a className="active item">Home</a>
                <a className="item">Symbot</a>
                <a className="item">Artigos</a>
                <a className="item">Contato</a>
                <a className="item">Sobre</a>
            </div>
            <div className="right menu">
                <div className="item">
                    <a className="ui button">Log in</a>
                </div>
                <div className="item">
                    <a className="ui primary button">Registrar</a>
                </div>
            </div>
        </div>
    );
}
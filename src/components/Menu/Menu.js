import React from "react";

export const Menu = () => {
    return(
        <div className="ui large secondary inverted pointing menu">
            <a className="active item">Home</a>
            <a className="item">Symbot</a>
            <a className="item">Artigos</a>
            <a className="item">Contato</a>
            <a className="item">Sobre</a>
            <div className="right item">
                <a className="ui inverted button">Log in</a>
                <a className="ui inverted button">Registrar</a>
            </div>
        </div>
    )
}
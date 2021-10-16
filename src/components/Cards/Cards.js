import React from "react";

export const Cards = ({ card, title, subtitle, text, link, linkTitle }) => {
    
    return(
        <div className="card">
            <img src={card} alt="card" />
            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">{title}</h4>
                    <h6 className="card-subtitle mb-2">{subtitle}</h6>
                        <p className="card-text">{text}</p>
                <div className="link d-flex">
                    <a href={link} className="card-link">{linkTitle}</a>
                </div>
            </div>
        </div>
    );
}
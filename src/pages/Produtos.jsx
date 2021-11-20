import React from 'react'
import product_card from '../components/product_data'
import './Produtos.css'
import img from '../img/logo.png'

const Produtos = () => {
    const listItems = product_card.map((item) => 
        <div classname="card" key={item.cd_produto}>
            <div className="card_img">
                <img src={img} alt=""/>
            </div>
            <div className="card_header">
                <h2>{item.nm_produto}</h2>
                <p>{item.ds_produto}</p>
                <p className="price">{item.vlr_produto}<span>R$</span></p>
            </div>
        </div>
    );

    return(
        <>
            <div className="main_content">
                {listItems}
            </div>
        </>
    )
}

export default Produtos;
/* 
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import product_card from '../components/product_data'
import './Produtos.css'
import img from '../img/logo.png'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch("/rest/produtos").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setProdutos(resp);
            console.log(resp)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const listItems = produtos.map((produto) => 
        <div classname="card" key={produto.codigo}>
            <div className="card_img">
                <img src={img} alt=""/>
            </div>
            <div className="card_header">
                <h2>{produto.titulo}</h2>
                <p>Quantidade</p>
                <p className="price">{produto.quantidade}</p>
            </div>
        </div>
    );

    return(
        <>
            <div className="main_content">
                {listItems}
            </div>
        </>
    )
}

export default Produtos;
*/
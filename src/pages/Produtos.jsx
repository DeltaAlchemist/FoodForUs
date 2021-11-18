import React from 'react'
import product_card from '../components/product_data'
import './Produtos.css'
import img from '../img/feijao.jfif'

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
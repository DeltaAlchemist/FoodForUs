import React from 'react'
import './Form.css'

const formApi = () => {
    return(
        <>
        <div class="form-container">
                    <form class="register-form">
                <input
                id="first-name"
                class="form-field"
                type="text"
                placeholder="cd_produto"
                name="firstName"
                />
               
                <input
                id="last-name"
                class="form-field"
                type="text"
                placeholder="cd_mercado"
                name="lastName"
                />
            
                <input
                id="email"
                class="form-field"
                type="text"
                placeholder="nm_produto"
                name="email"
                />
                
                <input
                id="last-name"
                class="form-field"
                type="text"
                placeholder="ds_produto"
                name="lastName"
                />
                
                <input
                id="last-name"
                class="form-field"
                type="text"
                placeholder="dt_fabricacao"
                name="lastName"
                />

                <input
                id="last-name"
                class="form-field"
                type="text"
                placeholder="dt_validade"
                name="lastName"
                />

                <input
                id="last-name"
                class="form-field"
                type="text"
                placeholder="vlr_produto"
                name="lastName"
                />
                <button class="form-field criar" type="submit"> Criar </button>
                <button class="form-field deletar" type="submit"> Deletar </button>
                <button class="form-field atualizar" type="submit"> Atualizar </button>
            </form>
        </div>
        </>
    )
}

export default formApi;
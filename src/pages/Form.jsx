import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = (props) => {

    let id = null;

    if (props.match.path.toLowerCase().includes("editar")) {
        id = props.match.params.id;
    }

    const [produto, setProduto] = useState({
        codigo: id,
        titulo: "",
        quantidade: "",
    })

    let metodo = "post"
    if (id) { metodo = "put" }

    const handleChange = e => {
        setProduto({ ...produto, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`/rest/produto/${(id ? id : "")}`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        }).then(() => {
            window.location = "/"
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`/rest/produto/${id}`)
            .then(resp => {
                return resp.json()
            }).then(resp => {
                setProduto(resp)
            })
        }
    }, [id])

    return(
        <>
        <div class="form-container">
            <form class="register-form">
                <input
                    class="form-field"
                    type="text"
                    value={produto.titulo}
                    placeholder="Nome do Produto"
                    name="titulo"
                    onChange={handleChange}
                />
                <input
                    class="form-field"
                    type="text"
                    value={produto.quantidade}
                    placeholder="Quantidade"
                    name="quantidade"
                    onChange={handleChange}
                />
                <button class="form-field criar" type="submit"> Enviar </button>
            </form>
        </div>
        </>
    )
}

export default Form;
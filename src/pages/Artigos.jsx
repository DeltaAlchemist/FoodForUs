import React from 'react'
import { Menu } from '../components/Menu';
import imgcard1 from '../img/ansiedade.png'
import imgcard2 from '../img/card2.jpg'
import imgcard6 from '../img/card6.jpg'

const Artigos = () => {

    return(
<<<<<<< HEAD
        <div className="pusher">
            <div class="ui items"><br/>
                <div class="item"><br/>
                    <div class="image">
=======
        <div className="pusher" style={{backgroundColor: '#4d4d4d', height: '100vh'}}>
            <div className="ui inverted vertical masthed center aligned segment" style={{ display: 'block' }}>
                <div className="ui container">
                    <Menu />
                </div>
            </div>
            <div className="ui container" style={{paddingTop: '40px'}}>
            <div className="ui items"><br/>
                <div className="item"><br/>
                    <div className="image">
>>>>>>> da85cbd19c3ea07e5716d1d8dfbfa6c26a98bf24
                        <img src= {imgcard1}/>
                    </div>
                    <div className="content">
                        <a className="header" href = "https://pebmed.com.br/ansiedade-e-o-transtorno-mais-comum-entre-os-brasileiros-durante-a-pandemia/" target = "_blank">Ansiedade é o transtorno mais comum entre os brasileiros durante a pandemia</a>
                        <div className="meta" style={{color:'lightblue'}}>
                            <span>Segundo uma pesquisa realizada pelo Ministério da Saúde, a ansiedade é o transtorno mais presente durante a pandemia de Covid-19. Além da ansiedade, encontrada em 86,5% dos respondentes, foi constatada uma presença moderada de transtorno do estresse pós-traumático (45,5%). A proporção de depressão grave foi um pouco mais baixa, 16%.</span>
                        </div>
                        <div className="description">
                            <button className="ui secondary button" style={{backgroundColor: 'black'}} ><a href = "https://pebmed.com.br/ansiedade-e-o-transtorno-mais-comum-entre-os-brasileiros-durante-a-pandemia/" target = "_blank" style={{color: 'white'}}>Veja Mais!</a></button>
                        </div>
                    </div>
                </div> <br/><br/>
                <div className="item">
                    <div className="image">
                        <img src={imgcard2}/>
                    </div>
                    <div className="content">
                        <a className="header" href = "https://zenklub.com.br/blog/saude-bem-estar/ansiedade/" target = "_blank" >Quais são os principais sintomas da Ansiedade?</a>
                        <div className="meta"style={{color:'lightblue'}}>
                            <span>Você sabe quais são os principais sintomas que a Ansiedade pode causar? Você pode estar sofrendo de ansiedade sem saber!</span>
                        </div>
                        <div className="description">
                            <button className="ui secondary button" style={{backgroundColor: 'black'}}>
                            <a href = "https://zenklub.com.br/blog/saude-bem-estar/ansiedade/" target = "_blank"style={{color: 'white'}}>Veja Mais!</a></button>
                        </div>
                    </div>
                </div> <br/>
                <div className="item"> <br/>
                    <div className="image">
                        <img src= {imgcard6}/>
                    </div>
                    <div className="content">
                        <a className="header" href = "https://psiquiatriapaulista.com.br/17-dicas-de-como-controlar-a-ansiedade/" target = "_blank">Como controlar a sua ansiedade?</a>
                        <div className="meta"style={{color:'lightblue'}}>
                            <span>Veja métodos para como controlar e diminuir seu nível de ansiedade e estresse sem sair de casa!</span>
                        </div>
                        <div className="description">
                            <button className="ui secondary button" style={{backgroundColor: 'black'}}>
                            <a href = "https://psiquiatriapaulista.com.br/17-dicas-de-como-controlar-a-ansiedade/" target = "_blank" style={{color: 'white'}}>Veja Mais!</a></button>
                        </div>
                    </div>
                </div><br/>
            </div>
            </div>
        </div>
    );
}

export default Artigos;
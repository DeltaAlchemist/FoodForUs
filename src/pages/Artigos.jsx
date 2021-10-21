import React from 'react'
import { Menu } from '../components/Menu';
import imgcard1 from '../img/ansiedade.png'
import imgcard2 from '../img/card2.jpg'
import imgcard6 from '../img/card6.jpg'

const Artigos = () => {

    return(
        <div className="pusher">
            <div class="ui items"><br/>
                <div class="item"><br/>
                    <div class="image">
                        <img src= {imgcard1}/>
                    </div>
                    <div class="content">
                        <a class="header" href = "https://pebmed.com.br/ansiedade-e-o-transtorno-mais-comum-entre-os-brasileiros-durante-a-pandemia/" target = "_blank">Ansiedade é o transtorno mais comum entre os brasileiros durante a pandemia</a>
                        <div class="meta">
                            <span>Segundo uma pesquisa realizada pelo Ministério da Saúde, a ansiedade é o transtorno mais presente durante a pandemia de Covid-19. Além da ansiedade, encontrada em 86,5% dos respondentes, foi constatada uma presença moderada de transtorno do estresse pós-traumático (45,5%). A proporção de depressão grave foi um pouco mais baixa, 16%.</span>
                        </div>
                        <div class="description">
                            <button class="ui secondary button"><a href = "https://pebmed.com.br/ansiedade-e-o-transtorno-mais-comum-entre-os-brasileiros-durante-a-pandemia/" target = "_blank">Veja Mais!</a></button>
                        </div>
                    </div>
                </div> <br/><br/>
                <div class="item">
                    <div class="image">
                        <img src={imgcard2}/>
                    </div>
                    <div class="content">
                        <a class="header" href = "https://zenklub.com.br/blog/saude-bem-estar/ansiedade/" target = "_blank">Quais são os principais sintomas da Ansiedade?</a>
                        <div class="meta">
                            <span>Você sabe quais são os principais sintomas que a Ansiedade pode causar? Você pode estar sofrendo de ansiedade sem saber!</span>
                        </div>
                        <div class="description">
                            <button class="ui secondary button">
                            <a href = "https://zenklub.com.br/blog/saude-bem-estar/ansiedade/" target = "_blank">Veja Mais!</a></button>
                        </div>
                    </div>
                </div> <br/>
                <div class="item"> <br/>
                    <div class="image">
                        <img src= {imgcard6}/>
                    </div>
                    <div class="content">
                        <a class="header" href = "https://psiquiatriapaulista.com.br/17-dicas-de-como-controlar-a-ansiedade/" target = "_blank">Como controlar a sua ansiedade?</a>
                        <div class="meta">
                            <span>Veja métodos para como controlar e diminuir seu nível de ansiedade e estresse sem sair de casa!</span>
                        </div>
                        <div class="description">
                            <button class="ui secondary button">
                            <a href = "https://psiquiatriapaulista.com.br/17-dicas-de-como-controlar-a-ansiedade/" target = "_blank">Veja Mais!</a></button>
                        </div>
                    </div>
                </div><br/>
            </div>
        </div>
    );
}

export default Artigos;
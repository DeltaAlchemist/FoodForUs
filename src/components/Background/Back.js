import React from "react";
import styled from 'styled-components'
import card1 from '../../img/ansiedade.png'
const DivBack = styled.div`
h1{
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100&family=Roboto+Mono:ital,wght@1,100&display=swap');
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto Mono', monospace;
    font-weight: lighter;
    font-style: oblique;
    font-size: 48px;
    
}
h2{
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100&family=Roboto+Mono:ital,wght@1,100&display=swap');
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto Mono', monospace;
    font-weight: lighter;
    font-style: oblique;
    
    

}
.tx{
    margin:0;
  
    display: block;
    left: 0;
    right: 0;
    
}
.text{
  
  color: white;
  font-weight: bold;
  border: 3px solid #18588C;
  position: absolute;
  margin: 0;
  padding: 20px;
  left:0;
  right: 0;
  top:19vh;
  text-align: center;
  width: 100%;
}

.back{
    -webkit-filter: blur(8px);
    filter        : blur(3px);
    position: absolute;
    background-color: #fff;
    background-color:#fff;
    opacity: 0.6;
    display: block;
    background-image: url('https://wallpaperaccess.com/full/830588.jpg');
    background-size:cover;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    

}


/* .content {
  /* this is needed or the background will be offset by a few pixels at the top */
  /* overflow: auto;
  position: relative;
}

.content {
  content: "";
  position: fixed;
  left: 0;
  right: 0;


  display: block;
  background-image: url('https://i.imgur.com/lL6tQfy.png');
  background-size:cover;
  width: 100%;
  height: 100%;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px); 
} */
`


export default ()=> {
    return(
        <DivBack>
            <>
                            
                            <div className="back">
                            
                            </div>
                            <div class="text">
                            <h1>
                                Bem vindo a Syminate!!
                            </h1>
                            <div class="tx">
                            <h2>
                                Olá, nós somos a Syminate.<br/>
                                uma empresa que nasceu, (assim como todas kk) de uma ideia.<br/>
                                Uma ideia meio mirabolante de 5 universitários, que imaginam um mundo melhor a todos.<br/>
                                Com esse desejo, nós 5 resolvemos criar a Syminate.<br/> 
                                Um site (e futuro aplicativo shhhh...) para ajudar adultos e adolescentes com ansiedade,<br/>
                                por meios de atividades, conquistas, consultas e até com nosso Raposym.<br/>
                                Que é nossa inteligencia artificial, treinada para te auxiliar durante crises.<br/>


                                A syminate visa buscar o melhor em você para você. Para que a sua felicidade vire rotina!!<br/>
                            



                            </h2>
                            </div>
                            
                        </div>
                                



            </>
        </DivBack>



)
}
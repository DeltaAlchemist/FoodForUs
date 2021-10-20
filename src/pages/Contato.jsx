import styled from 'styled-components';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer/Footer';

const DivIcon = styled.div`
    margin-left: 8px;
    margin-bottom: 4px;
    text-align: center;
    font-size: 24px;
` 

const Contato = () => {

    return (
        <>
        <Menu />
        <div className="ui container" style={{ marginTop:"50px", marginBottom:"50px"}}>
            <form class="ui form">
                <DivIcon> 
                    <i class="paper plane icon"> </i><h1>Contate-nos </h1>
                </DivIcon> 
                <br/>
                <div class="field">
                    <label><h5>Digite seu Nome Completo: </h5></label>
                    <input type="text" name="first-name" placeholder="Digite seu Nome aqui"/>
                </div>
                <br/>
            
                <div class="field">
                    <label><h5>Digite seu E-mail: </h5></label>
                    <input type="text" name="e-mail" placeholder="Digite seu e-mail aqui!"/>
                </div>
                <br/>
                
                <div class="ui form">
                    <div class="field">
                        <label><h5>Digite sua mensagem</h5></label>
                            <textarea></textarea>
                    </div>
                </div>
                
                <br/>
                
                <button class="ui button" type="submit">Enviar</button>
            </form>
        </div>
        <Footer />
        </>
    );
}

export default Contato
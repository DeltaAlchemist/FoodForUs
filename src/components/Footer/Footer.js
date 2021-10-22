export const Footer = () => {
    return(
        <div className="ui inverted vertical footer segment">
            <div className="ui container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    {/* <div className="three wide column">
                        <h4 className="ui inverted header">Sobre</h4>
                        <div className="ui inverted link list">
                            <a href="#" className="item">Sobre nós</a>
                            <a href="#" className="item">Contato</a>
                            <a href="#" className="item">Parcerias</a>
                            <a href="#" className="item">Artigos</a>
                        </div>
                    </div> */}
                    <div className="seven wide column">
                    <h4 className="ui inverted header">Sobre</h4>
                    <div className="ui inverted link list">
                        <a href="#" className="item">Sobre nós</a>
                            <a href="#" className="item">Contato</a>
                            <a href="#" className="item">Parcerias</a>
                            <a href="#" className="item">Artigos</a>
                    </div>
                    </div>
                    <div className="seven wide column">
                    <h4 className="ui inverted header">Obrigado.</h4>
                    <p>Nós agradecemos sua visita. <br/>E que a felicidade vire rotina!!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
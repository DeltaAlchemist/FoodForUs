import './home.css'
import Title from "../img/title_logo.png"
import { Footer } from '../components/Footer/Footer'


const Home = () => {
    return(
        <div className="pusher">
            <div className="ui inverted vertical masthed center aligned segment" style={{ display: 'block' }}>
                <div className="header">
                    <div className="ui text container" style={{ fontFamily: 'Lato', boxSizing: 'border-box' }}>
                        <img src={Title} className="ui inverted header" style={{ marginTop: '192px', minHeight:'14px'}} />
                        <h2 style={{ fontWeight: '400', fontSize:'27.2px'}}>Ajudando pessoas e a Natureza através da sustentabilidade na alimentação</h2>
                        <div className="ui huge button" id="home-button" style={{ marginTop: '10px', backgroundColor:"#5ab86f",color:"white" }}>
                            Vamos lá 
                            <i className="right arrow icon" />
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="ui vertical stripe quote segment" style={{ background:"white"}}>
                        <div className="ui equal width stackable internally celled grid">
                            <div className="center aligned row">
                                <div className="column">
                                <h3>"Um serviço atemporal"</h3>
                                <p>É o que sempre ouvimos</p>
                                </div>
                                <div className="column">
                                <h3>"Eles entenderam o que o consumidor precisa"</h3>
                                <p>
                                    Co-fundador da rede de supermercados Extra
                                </p>
                                </div>
                                <div className="column">
                                <h3>"Dentro"</h3>
                                <p>- Casimiro Miguel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                       
        </div>
    )
}

export default Home
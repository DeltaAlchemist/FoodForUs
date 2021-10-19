import { Menu } from '../components/Menu';
import styled from 'styled-components';

const DivHome = styled.div`

` 

const Home = () => {
    return(
        <div className="pusher">
            <div className="ui inverted vertical masthed center aligned segment" style={{ display: 'block' }}>
                <div className="ui container">
                    <Menu />
                </div>
                <div className="ui text container" style={{ fontFamily: 'Lato', boxSizing: 'border-box' }}>
                    <h1 className="ui inverted header" style={{ marginTop: '192px', minHeight:'14px', fontSize:'64px' }}>Syminate</h1>
                    <h2 style={{ fontWeight: '400', fontSize:'27.2px'}}>Que a felicidade vire rotina.</h2>
                    <div className="ui huge primary button">
                        Vamos lá 
                        <i className="right arrow icon" />
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Home
import React from 'react'
import { Menu } from '../components/Menu';
import Back  from '../components/Background/Back';

const Sobre = () => {

    return(
        <div className="pusher" style={{backgroundColor: '#4d4d4d', height: '100vh'}}>
            <div className="ui inverted vertical masthed center aligned segment" style={{ display: 'block' }}>
                <div className="ui container">
                    <Menu />
                </div>
            </div>
            <div className="ui container">
               <Back/>
            </div>
        </div>
    );
}

export default Sobre;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './components/Menu'
import Home from './pages/Home';
import Artigos from './pages/Artigos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import { Footer } from './components/Footer/Footer';

const App = () => {
    return(
        <BrowserRouter>
        <Menu />   
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artigos" component={Artigos} />
                <Route path="/contato" component={Contato} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
            <Footer/>
        </BrowserRouter>  
    );
}

export default App
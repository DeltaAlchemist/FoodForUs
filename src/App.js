import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Artigos from './pages/Artigos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

const App = () => {
    return(
        <BrowserRouter>  
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artigos" component={Artigos} />
                <Route path="/contato" component={Contato} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>  
    );
}

export default App
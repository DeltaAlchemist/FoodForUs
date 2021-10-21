import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './components/Menu'
import Home from './pages/Home';
import Artigos from './pages/Artigos';
import Contato from './pages/Contato';

const App = () => {
    return(
        <BrowserRouter>
        <Menu />   
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artigos" component={Artigos} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>  
    );
}

export default App
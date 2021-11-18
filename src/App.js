import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './components/Menu'
import Home from './pages/Home';
import { Footer } from './components/Footer/Footer';
import Produtos from './pages/Produtos'
import formApi from './pages/Form'

const App = () => {
    return(
        <BrowserRouter>
        <Menu />   
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/api" component={formApi} />
            </Switch>
            <Footer/>
        </BrowserRouter>  
    );
}

export default App
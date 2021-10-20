import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Artigos from './pages/Artigos';

const App = () => {
    return(
        <BrowserRouter>  
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artigos" component={Artigos} />
            </Switch>
        </BrowserRouter>  
    );
}

export default App
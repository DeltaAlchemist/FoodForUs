import Navbar from './components/Navbar';
import { Cards } from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';


const App = () => {
    return(
        <>
        <Navbar />   
        <Home />
        </>  
    );
}

export default App
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cards } from '../components/Cards'
import crd1 from '../img/card1.jpg'
import crd2 from "../img/card2.jpg"
import crd3 from "../img/card3.jpg"
import crd4 from "../img/card4.jpg"
import crd5 from "../img/card5.jpg"
import crd6 from "../img/card6.jpg"

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <Cards 
                        card={crd1} 
                        title="Conforto"
                        subtitle="Nada melhor que o lar"
                        text="Seja atendida no conforto de casa."
                        link="#"
                        linkTitle="Venha conhecer"
                    />
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <Cards 
                        card={crd2} 
                        title="Conforto"
                        subtitle="Nada melhor que o lar"
                        text="Seja atendida no conforto de casa."
                        link="#"
                        linkTitle="Venha conhecer"
                    />
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <Cards 
                        card={crd3} 
                        title="Conforto"
                        subtitle="Nada melhor que o lar"
                        text="Seja atendida no conforto de casa."
                        link="#"
                        linkTitle="Venha conhecer"
                    />
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <Cards 
                        card={crd4} 
                        title="Conforto"
                        subtitle="Nada melhor que o lar"
                        text="Seja atendida no conforto de casa."
                        link="#"
                        linkTitle="Venha conhecer"
                    />
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <Cards 
                        card={crd5} 
                        title="Conforto"
                        subtitle="Nada melhor que o lar"
                        text="Seja atendida no conforto de casa."
                        link="#"
                        linkTitle="Venha conhecer"
                    />
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <Cards 
                        card={crd6} 
                        title="Conforto"
                        subtitle="Nada melhor que o lar"
                        text="Seja atendida no conforto de casa."
                        link="#"
                        linkTitle="Venha conhecer"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
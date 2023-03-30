import Navbar from "../components/navbar/navbar";
import Aside from "../components/aside/aside";
import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <main>
            <Navbar/>
            <Aside/>
            <section className="sps-notfound-section">
                <h1>Cette page n'existe pas</h1>
                <Link to="/">Cliquez ici pour revenir à la page principale</Link>
            </section>
            
        </main>
    )
}

export default NotFound;
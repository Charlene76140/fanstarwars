import {Link} from "react-router-dom";

function Nav () {
    return (
        <nav className="colorNav">
            <ul class="nav justify-content-center">
                <li class="nav-item m-3">
                    <Link class="nav-link btn btn-outline-danger"  to="/Availableresource">Accueil</Link>
                </li>
                <li class="nav-item m-3">
                    <Link class="nav-link btn btn-outline-success" to="/Searchlist">Recherche</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
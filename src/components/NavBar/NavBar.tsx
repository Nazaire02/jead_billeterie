import { useState } from "react";
import "./NavBar.css";
import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
    const [isMenuBarActive, setIsMenuBarActive] = useState(false);

    const toggleNav = () => {
        setIsMenuBarActive(!isMenuBarActive);
    };

    return (
        <div>
            <nav className="d-flex align-items-center justify-content-between py-2 px-2">
                <div className="d-flex align-items-center">
                    <p className="text-black mb-0 me-3">Contacts:</p>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-2">
                            {/* Icône WhatsApp */}
                            <span className="text-black">+225 07-796-693-186</span>
                        </div>
                        <div className="d-flex align-items-center">
                            {/* Icône Téléphone */}
                            <span className="text-black">+225 07-796-693-186</span>
                        </div>
                    </div>
                </div>

                <div className="mx-auto">
                    {/* Logo ou texte centré */}
                    <h1 className="mb-0">ARIAEVENT</h1>
                </div>

                <div className="list-unstyled d-flex">
                    <ul className="mb-0 list-unstyled d-flex">
                        <li className="me-3">
                            <a href="#"><Link to="/accueil">Mon ticket</Link></a>
                        </li>
                        <li className="me-3">
                            <a href="#"><Link to="/accueil">Nous découvrir</Link></a>
                        </li>
                    </ul>
                    <div className={`hamburger ${isMenuBarActive ? "hamburger-active" : ""}`} onClick={toggleNav}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </nav>

            <div className={`menubar ${isMenuBarActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <a href="#">Mon ticket</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

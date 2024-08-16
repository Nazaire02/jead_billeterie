import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const MobileMenu = () => {
    const [isMenuBarActive, setIsMenuBarActive] = useState(false);

    const toggleNav = () => {
        setIsMenuBarActive(!isMenuBarActive);
    };

    return (
        <div>
            <nav className="d-flex align-items-center justify-content-between py-2">
                <div className="mx-auto">
                    <h1 className="mb-0">JAED EVENT SHOW</h1>
                </div>

                <div className="list-unstyled d-flex">
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
                        <Link to="/accueil">Mon ticket</Link>
                    </li>
                    <li>
                        <Link to="/accueil">Nous découvrir</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const DesktopMenu = () => (
    <div>
        <nav className="d-flex align-items-center justify-content-between py-2 px-2">
            <div className="d-flex align-items-center">
                <p className="text-black mb-0 me-3">Contacts:</p>
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-2">
                        <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25D366" }} className="me-2" />
                        <span className="text-black">+225 07-796-693-186</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faPhone} style={{ color: "#25D366" }} />
                        <span className="text-black">+225 07-796-693-186</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                {/* Logo ou texte centré */}
                <h1 className="mb-0">JAED EVENT SHOW</h1>
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
            </div>
        </nav>
    </div>
);

export default function NavBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 922);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 922);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav>
            {isMobile ? (
                <MobileMenu />
            ) : (
                <DesktopMenu />
            )}
        </nav>
    );
}

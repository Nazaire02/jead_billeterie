import './Footer.css'
import facebook from "../../assets/logos/facebook.svg"
import instagram from "../../assets/logos/instagram.svg"
import whatsapp from "../../assets/logos/whatsapp.svg"
import tiktok from "../../assets/logos/tiktok.svg"

function Footer() {
  return (
    <footer className="footer-container">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <p className="footer-text mb-0">JAED, Inc. © 2024 All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
                        <a href="https://www.facebook.com/mariaevent" target="_blank">
                            <img src={facebook} alt="Facebook logo"/>
                        </a>
                        <a href="https://www.twitter.com/mariaevent" target="_blank">
                            <img src={instagram} alt="Twitter logo"/>
                        </a>
                        <a href="https://wa.me/2250798186695" target="_blank">
                            <img src={whatsapp} alt="Instagram logo"/>
                        </a>
                        <a href="https://wa.me/2250798186695" target="_blank">
                            <img src={tiktok} alt="Instagram logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

import './Accueil.css';
import affiche from '../../assets/images/affiche.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Accueil() {
    return (
        <div className='accueil-container'>
            <div className='little-resume-container d-flex flex-column align-items-start'>
                <div>
                    <h3 className='fw-bold'>JAED CONCERT</h3>
                </div>
                <div className='mt-2 d-flex flex-row align-items-center'>
                    <FontAwesomeIcon icon={faCalendarMinus} />
                    <p className='mb-0 ms-2'>Vendredi 27 décembre 2024, à partir de 17h </p>
                </div>
                <div className='mt-2 d-flex flex-row align-items-center'>
                    <FontAwesomeIcon icon={faMapLocation} />
                    <p className='mb-0 ms-2'>Attécoubé, Agban-village</p>
                </div>
            </div>
            <div className="container my-4">
                <div className="row flex-1">
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <img src={affiche} alt="Event Poster" className="img-fluid rounded-4" />
                        </div>
                        <div className="mb-4">
                            <p>Le <strong>27 décembre 2024</strong> à partir de <strong>17h</strong>, se tiendra la première édition du <strong>JAED CONCERT</strong> à <strong>Attécoubé, Agban village au niveau de l'esplanade de la chefferie</strong>. Cet événement offre une expérience africaine explosive et unique grâce à son cadre, son contenu, son emplacement et sa programmation musicale qui crée une ambiance folle.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <Link to="/buy-ticket/step" className='btn btn-primary text-uppercase w-100 mb-2'>J'achète mon ticket</Link>
                                <h2 className="mt-3">JAED CONCERT</h2>
                                <table className="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="text-capitalize">Catégorie</td>
                                            <td className="text-end">Concert</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Ville</td>
                                            <td className="text-end">Abidjan, Côte d'Ivoire</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Lieu</td>
                                            <td className="text-end">Attécoubé, Agban Village</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Date et heure</td>
                                            <td className="text-end">Vendredi, 27 Décembre, 2024 A partir de 17h</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Artiste</td>
                                            <td className="text-end">
                                                Jaed
                                                <span className="ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Chaque événement est associé à un code unique, facilitant sa recherche sur la plateforme.">
                                                    <i className="fa-solid fa-circle-question"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Téléphone</td>
                                            <td className="text-end">+225 0141992967</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Accueil;

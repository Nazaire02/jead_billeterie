import React from 'react';
import './Accueil.css';
import affiche from '../../assets/images/affiche.jpg'
import Button from '@mui/material/Button';

function Accueil() {
    return (
        <div className='accueil-container'>
            <div className='little-resume-container d-flex flex-column align-items-start'>
                <div>
                    <h3>JAED SHOW EVENT</h3>
                </div>
                <div className='mt-2'>
                    {/* Icône Calendrier */}
                    <p>Vendredi 27 décembre 2024, de 20h à l'aube </p>
                </div>
                <div className='mt-2'>
                    {/* Icône lieu */}
                    <p>Attécoubé, Agban-village</p>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <img src={affiche} alt="Event Poster" className="img-fluid rounded-4" />
                        </div>
                        <div className="mb-4">
                            <p>Le <strong>27 et 28 décembre 2024</strong> à partir de <strong>12h</strong>, se tiendra la troisième édition du <strong>Mother Africa Festival</strong> à <strong>Abidjan</strong>. Cet événement offre une expérience africaine explosive et unique grâce à son cadre, son contenu, son emplacement et sa programmation musicale qui crée une ambiance chill et Afro-moderne.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <a className="btn btn-primary text-uppercase w-100 mb-2" href="https://www.tikerama.com/en/paiement/choix-tickets/mother-africa-festival">
                                    Buy tickets online <i className="fa-solid fa-angles-right"></i>
                                </a>
                                <a className="btn btn-success text-white text-uppercase w-100 mb-2" target="_blank" href="https://wa.me/2250705116325/?text=*https://www.tikerama.com/en/evenement/mother-africa-festival*%0aBonjour,%0aJe suis intéressé(e) par l&#039;événement *MOTHER AFRICA FESTIVAL* et j&#039;aimerais acheter des tickets.">
                                    Buy via WhatsApp <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a className="btn btn-primary text-white text-uppercase w-100 mb-2" href="https://www.tikerama.com/en/points-de-vente-physique?pays=ci">
                                    Buy at physical store <i className="fa-solid fa-store"></i>
                                </a>
                                <p className="pt-1 pb-3">From 10 000 F CFA</p>
                                <h2 className="mt-3">MOTHER AFRICA FESTIVAL</h2>
                                <table className="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="text-capitalize">Catégorie</td>
                                            <td className="text-end">Concert-Show</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Ville</td>
                                            <td className="text-end">Abidjan, Côte d'Ivoire</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Lieu</td>
                                            <td className="text-end">Mother Africa Beach, Abidjan</td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Date et heure</td>
                                            <td className="text-end">Fri, Dec 27, 2024 · 12:00 PM and Sat, Dec 28, 2024 · 12:00 PM <small className="text-muted">GMT</small></td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Code événement</td>
                                            <td className="text-end">
                                                5682
                                                <span className="ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Chaque événement est associé à un code unique, facilitant sa recherche sur la plateforme.">
                                                    <i className="fa-solid fa-circle-question"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-capitalize">Téléphone</td>
                                            <td className="text-end">+2250705116325</td>
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

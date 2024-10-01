import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './BuyTicket.css';
import affiche from '../../assets/images/affiche.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarMinus, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { createPaymentLink } from '../../api/payment';
import Ticket from '../../components/Ticket/Ticket';
import { useParams } from 'react-router-dom';

function BuyTicket() {
  const steps = ['Tickets', 'Paiement', 'Reçu de paiement'];
  const { step } = useParams();
  const [numStep, setNumStep] = useState(() => (step === '3' ? 3 : 1));
  const [quantity, setQuantity] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ticketPrice = 3000;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  function montantTotal() {
    return quantity * ticketPrice;
  }

  const createPayment = async () => {
    setIsLoading(true);
    try {
      const res = await createPaymentLink({ quantity });
      if (res.data.statut === true) {
        localStorage.setItem("token", res.data.token);
        window.location.href = res.data.url;
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  if (isError) {
    return (
      <div className="alert alert-danger mx-4" role="alert" style={{ marginTop: 100 }}>
        Une erreur s'est produite lors du paiement. Veuillez réessayer.
      </div>
    );
  }

  return (
    <div className='container-buy-ticket'>
      <div className="mt-4">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={numStep - 1} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    '& .MuiStepLabel-label': {
                      color: numStep === index + 1 ? '#6c757d' : '#89753a',
                    },
                    '& .MuiStepIcon-root': {
                      color: numStep === index + 1 ? '#6c757d' : '#89753a',
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      {numStep === 1 && (
        <>
          <div className="col-12 text-center mt-3" style={{ marginBottom: 100 }}>
            <h4>Sélection des tickets</h4>
            <div className="bar-border1 mx-auto mb-2"></div>
            <p>Choisissez la quantité de ticket pour chaque catégorie.</p>
          </div>

          <div className='row mb-4'>
            <div className='col-12 col-md-7'>
              <div className='d-flex flex-column align-items-center'>
                <h3>JAED SHOW EVENT</h3>
                <div className='mt-3 d-flex flex-row align-items-center'>
                  <FontAwesomeIcon icon={faCalendarMinus} />
                  <p className='mb-0 ms-2'>Vendredi 27 décembre 2024, de 20h à l'aube</p>
                </div>
                <div className='mt-3 d-flex flex-row align-items-center'>
                  <FontAwesomeIcon icon={faMapLocation} />
                  <p className='mb-0 ms-2'>Attécoubé, Agban-village</p>
                </div>
              </div>

              <div className='mx-3 mt-4'>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className='fw-bold'>GRAND PUBLIC</h4>
                    <p className='mb-2' style={{ fontSize: 20, color: "green", fontStyle: "italic" }}>{ticketPrice} FCFA</p>
                    <p>Tarif unique</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={handleDecrease}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="form-control text-center"
                      readOnly
                      style={{ width: '60px' }}
                    />
                    <button
                      className="btn btn-outline-secondary ms-2"
                      onClick={handleIncrease}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="bar-border2 mb-2"></div>
              </div>
            </div>

            <div className='col-12 col-md-5 px-4'>
              <img src={affiche} alt="Event Poster" className="img-fluid w-100 rounded-4 mb-4" />
              <div>
                <p>RESUME</p>
                <div className="bar-border2 mb-2"></div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="text-capitalize">{`${quantity} × Ticket(s)`}</td>
                      <td className="text-end">{`${quantity} × ${ticketPrice}`}</td>
                    </tr>
                    <tr>
                      <td className="text-capitalize fw-bold">TOTAL</td>
                      <td className="text-end fw-bold">{montantTotal()} FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {quantity >= 1 &&
            <div className="d-flex flex-1 justify-content-center px-4 mt-25">
              <a className="btn btn-primary text-uppercase col-12 col-md-3 mb-4" onClick={() => setNumStep(2)}>
                CONTINUER
              </a>
            </div>}
        </>
      )}

      {numStep === 2 && (
        <>
          <div className="d-flex flex-1 justify-content-center px-4 mt-25" style={{ marginTop: "8%", marginBottom: "7%" }} onClick={createPayment}>
            {isLoading ? (
              <a className="btn btn-primary text-uppercase col-12 col-md-3 mb-4">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </a>
            ) : (
              <a className="btn btn-primary text-uppercase col-12 col-md-3 mb-4">
                J'accède au guichet
              </a>
            )}
          </div>
          <div className="d-flex justify-content-start container-fluid">
            <button className="btn btn-outline-secondary" onClick={() => setNumStep(1)}>
              <FontAwesomeIcon icon={faArrowLeft} /> Retour
            </button>
          </div>
        </>
      )}

      {numStep === 3 && (
        <div className='mt-2'>
          <Ticket payment_id="222" />
        </div>
      )}
    </div>
  );
}

export default BuyTicket;

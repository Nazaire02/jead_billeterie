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
import { useParams } from 'react-router-dom';
import Ticket from '../../components/Ticket/Ticket';

function BuyTicket() {
  const steps = [
    'Tickets',
    'Paiement',
    'Reçu de paiement',
  ];

  const categories = [
    {
      id: 1,
      label: "GRAND-PUBLIC",
      price: 3000,
      description: "Description for GRAND-PUBLIC"
    },
    {
      id: 2,
      label: "VIP",
      price: 7000,
      description: "Description for VIP"
    },
    {
      id: 3,
      label: "VVIP",
      price: 10000,
      description: "Description for VVIP"
    },
  ];

  const { step } = useParams();
  const [numStep, setNumStep] = useState(() => {
    return step === '3' ? 3 : 1;
  });
  const [quantity_gp, setQuantity_gp] = useState(0);
  const [quantity_vip, setQuantity_vip] = useState(0);
  const [quantity_vvip, setQuantity_vvip] = useState(0);
  const [paymentURL, setPaymentURL] = useState("");

  const handleIncrease = (categorie: string) => {
    switch (categorie) {
      case "GRAND-PUBLIC":
        setQuantity_gp(prevQuantityGP => prevQuantityGP + 1);
        break;
      case "VIP":
        setQuantity_vip(prevQuantityVIP => prevQuantityVIP + 1);
        break;
      case "VVIP":
        setQuantity_vvip(prevQuantityVVIP => prevQuantityVVIP + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrease = (categorie: string) => {
    switch (categorie) {
      case "GRAND-PUBLIC":
        if (quantity_gp > 0) {
          setQuantity_gp(prevQuantityGP => prevQuantityGP - 1);
        }
        break;
      case "VIP":
        if (quantity_vip > 0) {
          setQuantity_vip(prevQuantityVIP => prevQuantityVIP - 1);
        }
        break;
      case "VVIP":
        if (quantity_vvip > 0) {
          setQuantity_vvip(prevQuantityVVIP => prevQuantityVVIP - 1);
        }
        break;
      default:
        break;
    }
  };

  function montantTotal() {
    return categories.reduce((total, categorie) => {
      if (categorie.label === "GRAND-PUBLIC") return total + quantity_gp * categorie.price;
      if (categorie.label === "VIP") return total + quantity_vip * categorie.price;
      if (categorie.label === "VVIP") return total + quantity_vvip * categorie.price;
      return total;
    }, 0);
  }

  const createPayment = async () => {
    try {
      setNumStep(2)
      const montant = montantTotal();
      const res = await createPaymentLink({ montant })
      setPaymentURL(res.data.payment_url)
    } catch (error) {
      console.log(error, "error")
    }
  }

  return (
    <div className='container-buy-ticket'>
      <div className="mt-4">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={numStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    '& .MuiStepLabel-label': {
                      color: numStep === index ? '#6c757d' : '#89753a',
                    },
                    '& .MuiStepIcon-root': {
                      color: numStep === index ? '#6c757d' : '#89753a',
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

      {numStep === 1 &&
        (
          <>
            <div className="col-12 text-center mt-3" style={{ marginBottom: 100 }}>
              <h4>Sélection des tickets</h4>
              <div className="bar-border1 mx-auto mb-2"></div>
              <p>Choisissez la quantité de ticket pour chaque catégorie.</p>
            </div>

            <div className='row mb-4'>
              <div className='col-12 col-md-7'>
                <div className='d-flex flex-column align-items-center'>
                  <h3 className=''>JAED SHOW EVENT</h3>
                  <div className='mt-3 d-flex flex-row align-items-center'>
                    <FontAwesomeIcon icon={faCalendarMinus} />
                    <p className='mb-0 ms-2'>Vendredi 27 décembre 2024, de 20h à l'aube </p>
                  </div>
                  <div className='mt-3 d-flex flex-row align-items-center'>
                    <FontAwesomeIcon icon={faMapLocation} />
                    <p className='mb-0 ms-2'>Attécoubé, Agban-village</p>
                  </div>
                </div>

                {categories.map((categorie) => (
                  <div key={categorie.id} className='mx-3 mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className='fw-bold'>{categorie.label}</h4>
                        <p className='mb-2' style={{ fontSize: 20, color: "green", fontStyle: "italic" }}>{categorie.price} FCFA</p>
                        <p>{categorie.description}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() => handleDecrease(categorie.label)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={categorie.label === "GRAND-PUBLIC" ? quantity_gp : categorie.label === "VIP" ? quantity_vip : quantity_vvip}
                          className="form-control text-center"
                          readOnly
                          style={{ width: '60px' }}
                        />
                        <button
                          className="btn btn-outline-secondary ms-2"
                          onClick={() => handleIncrease(categorie.label)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="bar-border2 mb-2"></div>
                  </div>
                ))}
              </div>

              <div className='col-12 col-md-5 px-4'>
                <img src={affiche} alt="Event Poster" className="img-fluid w-100 rounded-4 mb-4" />
                <div>
                  <p>RESUME</p>
                  <div className="bar-border2 mb-2"></div>
                  <table className="table">
                    <tbody>
                      {categories.map((categorie) => (
                        <tr key={categorie.id}>
                          <td className="text-capitalize">
                            {categorie.label === "GRAND-PUBLIC" ? `${quantity_gp} × ${categorie.label}` :
                              categorie.label === "VIP" ? `${quantity_vip} × ${categorie.label}` :
                                `${quantity_vvip} × ${categorie.label}`}
                          </td>
                          <td className="text-end">
                            {categorie.label === "GRAND-PUBLIC" ? `${categorie.price * quantity_gp} FCFA` :
                              categorie.label === "VIP" ? `${categorie.price * quantity_vip} FCFA` :
                                `${categorie.price * quantity_vvip} FCFA`}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="text-capitalize fw-bold">TOTAL</td>
                        <td className="text-end fw-bold">{montantTotal()} FCFA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="d-flex flex-1 justify-content-center px-4 mt-25">
              <a className="btn btn-primary text-uppercase col-12 col-md-3 mb-4" onClick={createPayment}>
                CONTINUER
              </a>
            </div>
          </>
        )
      }
      {numStep === 2 &&
        (
          <>
            <div className="d-flex flex-1 justify-content-center px-4 mt-25" style={{ marginTop: "8%", marginBottom:"7%" }}>
              <a className="btn btn-primary text-uppercase col-12 col-md-3 mb-4" href={paymentURL}>
                J'accède au guichet
              </a>
            </div>
            <div className="d-flex justify-content-start container-fluid">
              <button className="btn btn-outline-secondary" onClick={() => setNumStep(1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Retour
              </button>
            </div>
          </>
        )
      }
      {
        numStep === 3 &&
        <div className='mt-2'>
          <Ticket payment_id="222"/>
        </div>
      }
    </div>
  );
}

export default BuyTicket;

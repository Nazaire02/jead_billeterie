import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './BuyTicket.css'
import affiche from '../../assets/images/affiche.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { Description } from '@mui/icons-material';

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
      price: "3.000",
      description: "jhdhsefhsef jhqeqejkqefjk jqenqefjkjkqef"
    },
    {
      id: 2,
      label: "VIP",
      price: "7.000",
      description: "jhdhsefhsef jhqeqejkqefjk jqenqefjkjkqef"
    },
    {
      id: 3,
      label: "VVIP",
      price: "10.000",
      description: "jhdhsefhsef jhqeqejkqefjk jqenqefjkjkqef"
    },
  ];

  const [numStep, setNumStep] = useState(2);
  const [quantity_gp, setQuantity_gp] = useState(0);
  const [quantity_vip, setQuantity_vip] = useState(0);
  const [quantity_vvip, setQuantity_vvip] = useState(0);

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

  return (
    <div className='container-buy-ticket'>
      <div style={{ marginTop: '7%' }}>
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
      <div className="col-12" style={{ marginBottom: "7%", marginTop: "3%" }}>
        <h4 className="text-center">Sélection des tickets</h4>
        <div className="bar-border1 mx-auto mb-2"></div>
        <div className="text-center">
          <p>Choisissez la quantité de ticket pour chaque categorie.</p>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-7'>
          <div className='d-flex flex-column align-items-center'>
            <div>
              <h3 className=''>JAED SHOW EVENT</h3>
            </div>
            <div className='mt-3 d-flex flex-row align-items-center'>
              <FontAwesomeIcon icon={faCalendarMinus} />
              <p className='mb-0 ms-2'>Vendredi 27 décembre 2024, de 20h à l'aube </p>
            </div>
            <div className='mt-3 d-flex flex-row align-items-center'>
              <FontAwesomeIcon icon={faMapLocation} />
              <p className='mb-0 ms-2'>Attécoubé, Agban-village</p>
            </div>
          </div>
          {categories.map((categorie) => {
            return (<div className='mx-3 mt-4' style={{ marginBottom: 40 }}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className='fw-bold'>{categorie.label}</h4>
                  <p className='mb-2' style={{fontSize:20, color:"green", fontStyle:"italic"}}>{categorie.price} FCFA</p>
                  <p>{categorie.description}</p>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary me-2"
                    onClick={()=>handleDecrease(categorie.label)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    name={categorie.label}
                    value={categorie.label === "GRAND-PUBLIC" ? quantity_gp : categorie.label === "VIP" ? quantity_vip : quantity_vvip}
                    className="form-control text-center"
                    readOnly
                    required
                    style={{ width: '60px' }}
                  />
                  <button
                    className="btn btn-outline-secondary ms-2"
                    onClick={()=>handleIncrease(categorie.label)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="bar-border2 mb-2"></div>
            </div>)
          })}
        </div>
        <div className='col-5'>
          <img src={affiche} alt="Event Poster" className="img-fluid rounded-4" />
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;

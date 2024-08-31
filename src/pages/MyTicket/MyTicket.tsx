import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import './MyTicket.css'; // Assure-toi que le chemin est correct

const MyTicket = () => {
    const ticketRef = useRef<HTMLDivElement>(null);

    const handleGeneratePdf = () => {
        const doc = new jsPDF({
          orientation: 'landscape',
          unit: 'px', // Utilisation des pixels pour le format
          format: [840, 595],

        });

        if (ticketRef.current) {
          doc.html(ticketRef.current, {
              async callback(doc) {
                  await doc.save('concert-ticket.pdf');
              },
              x: 10, // Espacement gauche
              y: 30, // Espacement haut
              width: 840, // Largeur du contenu
              windowWidth: 840 // Largeur de la fenêtre pour les calculs
          });
      }
    };

    return (
        <div className="container" style={{marginTop:"10%"}}>
            <button className="btn btn-primary mb-3" onClick={handleGeneratePdf}>
                Generate Ticket PDF
            </button>
            <div ref={ticketRef} className="ticket-container">
                <div className="ticket-header">
                    <h1 className="ticket-title">Concert Ticket</h1>
                </div>
                <div className="ticket-body">
                    <div className="ticket-info">
                        <h3 className="ticket-subtitle">Artist: John Doe</h3>
                        <p>Date: September 15, 2024</p>
                        <p>Time: 7:00 PM</p>
                        <p>Venue: Madison Square Garden, NY</p>
                    </div>
                    <img
                        className="qr-code img-fluid"
                        src="https://via.placeholder.com/100x100.png?text=QR+Code"
                        alt="QR Code"
                    />
                </div>
                <div className="ticket-footer">
                    <p>Thank you for your purchase!</p>
                    <p>Show this ticket at the entrance.</p>
                </div>
            </div>
        </div>
    );
};

export default MyTicket;

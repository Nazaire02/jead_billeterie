import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Ticket.css';
import QRCode from "react-qr-code";
import ticket from "../../assets/images/ticket.png";

const Ticket = (props: any) => {
    const ticketRef = useRef(null);

    const handleGeneratePdf = () => {
        if (ticketRef.current) {
            html2canvas(ticketRef.current, { 
                scale: 2,
                useCORS: true
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');

                // Calcul de la taille du canvas pour le PDF
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                // Créer un PDF avec les dimensions exactes de l'image
                const doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [imgWidth, imgHeight], // Format ajusté à l'image
                });

                doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                doc.save('concert-ticket.pdf');
            });
        }
    };

    return (
        <div className="container" style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
            <button className="btn btn-primary mb-3" onClick={handleGeneratePdf}>
                Télécharger
            </button>
            <div ref={ticketRef} className="ticket-container">
                <div className="ticket-body">
                    <div className="ticket-image">
                        <img src={ticket} alt="" width={500}/>
                    </div>
                    <div>
                        <QRCode value={props.payment_id} size={210} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;

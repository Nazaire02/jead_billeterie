import { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './MyTicket.css';
import QRCode from "react-qr-code";
import ticket from "../../assets/images/ticket.png";
import { getPayments } from '../../api/payment';
import { TicketData } from '../../class/ticketData';

const MyTicket = () => {
    const ticketRef = useRef<HTMLDivElement>(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [ticketsData, setTicketsData] = useState<TicketData[]>([]);

    const getPaymentsByToken = async () => {
        const token = localStorage.getItem("token");
        setIsLoading(true);
        try {
            const res = await getPayments(token);
            console.log(res.data)
            if (res.data.statut === true) {
                const tickets: TicketData[] = res.data.payments;
                setTicketsData(tickets);
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPaymentsByToken();
    }, [])

    const handleGeneratePdf = () => {
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
        });

        const generateTicketPDF = async (ticketData: TicketData, index: number) => {
            if (ticketRef.current) {
                // Créez une nouvelle div temporaire pour le ticket
                const ticketDiv = document.createElement('div');
                ticketDiv.className = 'ticket-container';
                ticketDiv.innerHTML = `
                    <div class="ticket-body">
                        <div class="ticket-image">
                            <img src="${ticket}" alt="Ticket" width="500" />
                        </div>
                        <div>
                                    <QRCode value=${ticketData._id} size={210} />
                        </div>
                    </div>
                `;

                // Convertissez le ticket en image
                const canvas = await html2canvas(ticketDiv, { scale: 2, useCORS: true });
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                // Ajoutez l'image au document PDF
                doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

                // Ajoutez une nouvelle page pour le ticket suivant, sauf pour le dernier ticket
                if (index < ticketsData.length - 1) {
                    doc.addPage();
                }
            }
        };

        // Générez les tickets un par un
        const generateTickets = async () => {
            for (let i = 0; i < ticketsData.length; i++) {
                await generateTicketPDF(ticketsData[i], i);
            }
            // Enregistrez le PDF une fois tous les tickets ajoutés
            doc.save('tickets.pdf');
        };

        generateTickets();
    };

    if (isError) {
        return (
            <div className="alert alert-danger mx-4" role="alert" style={{ marginTop: 100 }}>
                Une erreur s'est produite lors du paiement. Veuillez réessayer.
            </div>
        );
    }

    return (
        <>
            {isLoading ? (
                <a className="btn btn-primary text-uppercase col-12 col-md-3 mb-4">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </a>
            ) : (
                <div
                    className="container"
                    style={{
                        marginTop: "10%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <button className="btn btn-primary mb-3" onClick={handleGeneratePdf}>
                        Télécharger les {ticketsData.length} tickets
                    </button>

                    {ticketsData.map((ticketData, index) => (
                        <div
                            key={index}
                            ref={ticketRef}
                            className="ticket-container"
                            style={{ marginBottom: "20px" }}
                        >
                            <div className="ticket-body">
                                <div className="ticket-image">
                                    <img src={ticket} alt="Ticket" width={500} />
                                </div>
                                <div>
                                    <QRCode value={ticketData._id} size={210} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default MyTicket;

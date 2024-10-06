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

    const handleGeneratePdf = async () => {
        if (ticketRef.current) {
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: 'a4',
            });

            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            for (let index = 0; index < ticketsData.length; index++) {
                const canvas = await html2canvas(ticketRef.current as HTMLElement, {
                    scale: 2,
                    useCORS: true,
                });
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
                const scaledWidth = imgWidth * ratio;
                const scaledHeight = imgHeight * ratio;
                doc.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
                if (index < ticketsData.length - 1) {
                    doc.addPage();
                }
            }
            doc.save(`jaed_show_tickets.pdf`);
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
                    <button className="btn btn-primary mb-3 downloadBtn" onClick={handleGeneratePdf}>
                        Télécharger les {ticketsData.length} tickets
                    </button>

                    <div>
                        {ticketsData.map((ticketData, index) => (
                            <div
                                key={index}
                                className="ticket-container"
                                ref={ticketRef}
                            >
                                <div className="ticket-body">
                                    <div className="ticket-image">
                                        <img src={ticket} alt="Ticket" />
                                    </div>
                                    <div className="qr-code">
                                        <QRCode value={ticketData._id} size={210} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </>
    );
}
export default MyTicket;

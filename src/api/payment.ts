import axios from "axios"

//const BACKEND_BASE_URL = "http://localhost:8081/api/"
const BACKEND_BASE_URL = "https://api.billeterie.lezard-corp.tech/api/"

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export async function createPaymentLink(data: any) {
    return await axios.post(BACKEND_BASE_URL + "customers/create-payment", data, config)
}

export async function getPayments(token: string|null) {
    return await axios.post(BACKEND_BASE_URL + "customers/get-tickets", {token}, config)
}

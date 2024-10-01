export class TicketData {
    _id: string;
    token: string;

    constructor(_id: string, token: string) {
        this._id = _id;
        this.token = token;
    }
}
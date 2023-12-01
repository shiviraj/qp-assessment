export class DataNotFoundError extends Error {
    constructor(message: string = DataNotFoundError.name) {
        super(message);
    }
}

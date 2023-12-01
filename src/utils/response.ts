import type {Response} from 'express'
import {DataNotFoundError} from "../exceptions/DataNotFoundError";

export {}

declare global {
    interface Promise<T> {
        sendSuccessResponse(response: Response, statusCode?: number): Promise<T>

        sendFailureResponse(response: Response, data?: Record<string, unknown>): Promise<T>

        sendFailureResponseWithNoError(response: Response, data?: Record<string, unknown>): void
    }
}

Promise.prototype.sendSuccessResponse = function <T>(this: Promise<T>, response: Response, statusCode: number = 200): Promise<T> {
    return this.then((data: T) => {
        response.status(statusCode).send(data)
        return data
    })
}

Promise.prototype.sendFailureResponse = function <T>(
    this: Promise<T>,
    response: Response,
    data?: Record<string, unknown>
): Promise<T> {
    return this.catch((error: Error) => {
        if (error instanceof DataNotFoundError) {
            response.status(401).send(data ?? {errorMessage: error.message})
        } else {
            response.status(500).send(data ?? {errorMessage: error.message})
        }
        throw error
    })
}

Promise.prototype.sendFailureResponseWithNoError = function <T>(
    this: Promise<T>,
    response: Response,
    data?: Record<string, unknown>
): void {
    this.sendFailureResponse(response, data).catch(() => ({}))
}

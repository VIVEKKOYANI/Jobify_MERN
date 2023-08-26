import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || 'something was wrong, try again later'
    res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
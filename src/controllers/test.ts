// -- Test

//Imports
import { Request, Response, NextFunction } from "express";
import logging from '../config/Utils_Logger';

//Functions
const status = (req: Request, res: Response, next: NextFunction) => {
    logging.info('Server', 'Test status called.');

    return res.status(200).json({
        message: 'Pong'
    });
};

export default { status };
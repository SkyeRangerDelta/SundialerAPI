// -- Status --

//Imports
import {NextFunction, Request, Response} from 'express';
import logging from "../config/Utils_Logger";
import {SAPIRouter} from "../types/SAPIRouter";
import {getRoutes} from "../modules/core/routeIndexer";

//Functions
const LOCALE = 'Status Route'
const SRT = new SAPIRouter('Status');

SRT.router.get('/', (req: Request, res: Response, next: NextFunction) => {
    logging.info(LOCALE, 'Status called.');

    return res.send({
        APIState: 'Online',
        Uptime: process.uptime(),
        Timestamp: new Date().toString(),
        Routes: getRoutes(true)
    });
});

export default SRT;
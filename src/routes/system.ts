// -- System --

//Imports
import {NextFunction, Request, Response} from "express";
import os from "os";

import {SAPIRouter} from "../types/SAPIRouter";
import logging from "../config/Utils_Logger";

//Functions
const LOCALE = 'System Route'
const SRT = new SAPIRouter('System');

SRT.router.get('/', (req: Request, res: Response, next: NextFunction) => {
    logging.info(LOCALE, 'Status called.');

    let systemLoadAvg = 0;

    for (const avg of os.loadavg()) {
        systemLoadAvg += avg;
    }

    return res.send({
        hostname: os.hostname(),
        platform: os.platform(),
        cpus: os.cpus().length,
        cpuUse: Math.round((systemLoadAvg / os.cpus().length))
    });
});

export default SRT;
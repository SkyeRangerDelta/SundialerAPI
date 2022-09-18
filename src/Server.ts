// --- API Driver ---

//Imports
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import logging from './config/Utils_Logger';
import config from './config/Server_Config';

import statusRoute from './routes/test';

//Vars
const LOCALE = 'Server';
const router = express();

// == Routers & Middleware ==

//Logging
router.use((req, res, next) => {
   logging.info(LOCALE, `Incoming Req: ${req.method} (URL: ${req.url}, IP: ${req.socket.remoteAddress})`);

   res.on('finish', () => {
       logging.info(LOCALE, `Incoming Req: ${req.method} (URL: ${req.url}, IP: ${req.socket.remoteAddress})\nStatus: ${res.statusCode}`);
   });

   next();
});

//BodyParser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//API rules

//Routes
router.use('/status', statusRoute);

//Error Handling
router.use((req, res, next) => {
    const error = new Error('Not Found');

    return res.status(404).json({
        message: error.message
    });
})

//Server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(LOCALE, `API live at ${config.server.hostname}:${config.server.port}`));
// --- Boot Functions ---
import logger from "../../config/Utils_Logger";
import bodyParser from "body-parser";
import http from "http";
import config from "../../config/Server_Config";
import express from "express";
import routeIndexer from "./routeIndexer";

async function initAPI() {
    const LOCALE = 'Server';
    const api = express();

    logger.info(LOCALE, 'Running init...');

    //Start Mongo

    //Obtain routes
    const routes = await routeIndexer.indexRoutes();

    //BodyParser
    api.use(bodyParser.json());
    api.use(bodyParser.urlencoded({ extended: false }));

    //Logging
    api.use((req, res, next) => {
        logger.info(LOCALE, `Incoming Req: ${req.method} (URL: ${req.url}, IP: ${req.socket.remoteAddress})`);

        res.on('finish', () => {
            logger.info(LOCALE, `Finished Req: ${req.method} (URL: ${req.url}, IP: ${req.socket.remoteAddress})\nStatus: ${res.statusCode}`);
        });

        next();
    });

    //Routes
    api.use('/', routes);

    //Error Handling
    api.use((req, res, next) => {
        const error = new Error('Not Found');

        return res.status(404).json({
            message: error.message
        });
    });

    //Server
    const httpServer = http.createServer(api);
    httpServer.listen(config.server.port, () => logger.info(LOCALE, `API live at ${config.server.hostname}:${config.server.port}`));
}

export default {
    initAPI
};
// --- Router Indexer ---

import fs from 'fs';
import * as path from 'path';
import express, {Router} from "express";
import {SAPIRouter} from "../../types/SAPIRouter";
import utils_Logger from "../../config/Utils_Logger";

const LOCALE = 'Route Indexer';

export default {
    async indexRoutes(): Promise<express.Router> {
        const appRouter = express();
        const routesPath = path.join(__dirname, '../..', 'routes');
        const routeIndex = fs.readdirSync(routesPath).filter(f => f.endsWith('.js'));

        for (const route of routeIndex) {
            const rt = await import(`../../routes/${route}`) as SAPIRouter;
            utils_Logger.info(LOCALE, `Indexing ${rt.name}`);
            appRouter.use(`/${route}`, rt);
        }

        return appRouter;
    }
}

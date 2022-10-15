// --- Router Indexer ---

import fs from 'fs';
import * as path from 'path';
import express from "express";
import {SAPIRouter} from "../../types/SAPIRouter";
import Logger from "../../config/Utils_Logger";

const LOCALE = 'Route Indexer';

export default {
    async indexRoutes(): Promise<express.Router> {
        const appRouter = express.Router();
        const routeIndex = getRoutes(false);

        for (const route of routeIndex) {
            await import(`../../routes/${route}`).then(rt => {
                const rtr: SAPIRouter = rt.default;
                Logger.info(LOCALE, `Indexing ${rtr.name}`);
                appRouter.use(`/${rtr.name}`, rtr.router);
            });
        }

        appRouter.get('/', (req, res, next) => {
            res.send({
                message: 'Online'
            });
        });

        return appRouter;
    }
}

export function getRoutes(simple: boolean) {
    const routesPath = path.join(__dirname, '../..', 'routes');
    const routeArr = fs.readdirSync(routesPath).filter(f => f.endsWith('.js'));

    if (simple) {
        const simpleRtArr = [];
        for (const route of routeArr) {
            simpleRtArr.push(route.substring(0, route.length - 3));
        }

        return simpleRtArr;
    }

    return routeArr;
}

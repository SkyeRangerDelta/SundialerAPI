// -- Status --

//Imports
import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import logging from "../../config/Utils_Logger.ts";

//Functions
const LOCALE = 'Status Route'
const statusRouter = new Router();

statusRouter.get('/status', ( ctx: RouterContext<string> ) => {
    logging.info(LOCALE, 'Status called.');

    ctx.response.status = 200;
    ctx.response.body = {
        APIState: 'Online',
        Uptime: (() => {
            const start = Number(Deno.env.get('UPTIME'));
            if (isNaN(start)) return 'Unknown';
            return ((Date.now() - start) / 1000).toFixed(2) + 's';
        })(),
        Timestamp: new Date().toString()
    };
});

export default {
  name: 'Status',
  router: statusRouter
};
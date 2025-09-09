// -- System --

//Imports
import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import os from "node:os";

import logging from "../../config/Utils_Logger.ts";

//Functions
const LOCALE = 'System Route'
const systemRouter = new Router();

systemRouter
  .get('/system', ( ctx: RouterContext<string> ) => {
    logging.info(LOCALE, 'System called.');

    let systemLoadAvg = 0;

    for (const avg of os.loadavg()) {
        systemLoadAvg += avg;
    }

    ctx.response.status = 200;
    ctx.response.body = {
      hostname: os.hostname(),
      platform: os.platform(),
      cpus: os.cpus().length,
      cpuUse: Math.round((systemLoadAvg / os.cpus().length))
    }
  });

export default {
  name: 'System',
  router: systemRouter
};
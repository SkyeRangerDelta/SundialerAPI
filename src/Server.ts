// --- API Driver ---

//Imports
import Logger from "./config/Utils_Logger.ts";
import { MainRouter } from "./routes/MainRouter.ts";
import config from "./config/Server_Config.ts";

import { Application } from "https://deno.land/x/oak/mod.ts";

//Declarations
const LOCALE = 'Server Index';

const app = new Application();

//Logging
app.use( async ( ctx, next ) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.request.method} ${ctx.request.url} - ${ms}ms`);
});

//Routes
app.use( MainRouter.routes(), MainRouter.allowedMethods() );

//Error Handling
app.use(( ctx ) => {
  if ( ctx.response.status === 404 ) {
    ctx.response.status = 404;
    ctx.response.body = { message: 'Resource Not Found' };
    Logger.warn(LOCALE, `404 Not Found: ${ctx.request.method} (URL: ${ctx.request.url}, IP: ${ctx.request.ip})`);
  }
  else if ( ctx.response.status >= 500 ) {
    ctx.response.status = 500;
    ctx.response.body = { message: 'Internal Server Error' };
  }
});

Deno.env.set('UPTIME', new Date().toString());

Logger.info(LOCALE, `Starting server on ${ config.server.hostname }:${ config.server.port }...`);
await app.listen( { port: config.server.port, hostname: config.server.hostname } );

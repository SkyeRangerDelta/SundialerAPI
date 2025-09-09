// --- Router Indexer ---
import Logger from "../config/Utils_Logger.ts";

import { Router } from "https://deno.land/x/oak/mod.ts";
import cwd = Deno.cwd;

const LOCALE = 'Route Indexer';

async function loadRoutes( router: Router ) {
  console.log('Loading routes...');

  const routesDir = `${ cwd() }/src/routes/v1`;

  for await ( const dirEntry of Deno.readDirSync( routesDir ) ) {
    if ( dirEntry.isFile && dirEntry.name.endsWith('.ts') ) {
      try {
        const modulePath = `./v1/${ dirEntry.name }`;
        const module = await import( modulePath );

        const routes = module.default.router.routes();
        const name = module.default.name || dirEntry.name.replace('.ts', '');

        router.use( routes, module.default.router.allowedMethods() );

        Logger.info(LOCALE, `Successfully loaded routes from ${ name }`);
      }
      catch ( error: unknown ) {
        Logger.error(LOCALE, `Error loading routes from ${ dirEntry.name }: ${ error }`);
      }
    }
  }
}

export async function getRouter(): Promise<Router> {
  const router = new Router();

  await loadRoutes( router );

  return router;
}
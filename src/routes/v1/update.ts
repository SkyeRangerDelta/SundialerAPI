// --- Update Node ---

//Imports
import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

//Vars
const LOCALE = 'UPDATE'
const updateRouter = new Router();

//Functions
updateRouter.get('/update', ( ctx: RouterContext<string> ) => {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'Invalid request.'
    }
});

updateRouter.post('/', ( ctx: RouterContext<string> ) => {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'Incomplete request.'
    }
});

export default {
  name: 'Update',
  router: updateRouter
}
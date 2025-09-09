// -- GAME STATE --

//Imports
import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

//Vars
const LOCALE = 'GAME-STATE';
const gameStateRouter = new Router();

//Functions
gameStateRouter.get('/gamestate', ( ctx: RouterContext<string> ) => {
   ctx.response.status = 400;
   ctx.response.body = {
     message: `Incomplete request. Please specify a game state endpoint.`
   }
});

/*
gameStateRouter.get('/cc_terraria', ( ctx: RouterContext<string> ) => {
    ctx.response.body = {
      message: 'Dispatched embed for game state.'
    }
});

gameStateRouter.get('/cc_ark', ( ctx: RouterContext<string> ) => {
    ctx.response.body = {
      message: 'Dispatched embed for game state.'
    }
});

gameStateRouter.get('/cc_dst', ( ctx: RouterContext<string> ) => {
    ctx.response.body = {
      message: 'Dispatched embed for game state.'
    }
});

gameStateRouter.get('/pldyn_ark', ( ctx: RouterContext<string> ) => {
    ctx.response.body = {
      message: 'Dispatched embed for game state.'
    }
});

gameStateRouter.get('/cc_starbound', ( ctx: RouterContext<string> ) => {
    ctx.response.body = {
      message: 'Dispatched embed for game state.'
    }
});
 */

export default {
  name: 'Gamestate',
  router: gameStateRouter
}
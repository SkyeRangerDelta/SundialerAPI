// -- GAME STATE --

//Imports
import {SAPIRouter} from "../types/SAPIRouter";

//Vars
const LOCALE = 'GAME-STATE';
const SRT = new SAPIRouter('Gamestate');

//Functions
SRT.router.get('/', (req, res, next) => {
   res.status(400).send({message: 'Incomplete request.'});
});

SRT.router.get('/cc_terraria', (req, res, next) => {
    res.send({message: 'Dispatched embed.'});
});

SRT.router.get('/cc_ark', (req, res, next) => {
    res.send({message: 'Dispatched embed.'});
});

SRT.router.get('/cc_dst', (req, res, next) => {
    res.send({message: 'Dispatched embed.'});
});

SRT.router.get('/pldyn_ark', (req, res, next) => {
    res.send({message: 'Dispatched embed.'});
});

SRT.router.get('/cc_starbound', (req, res, next) => {
    res.send({message: 'Dispatched embed.'});
});
// --- Update Node ---

//Imports
import {SAPIRouter} from "../types/SAPIRouter";

//Vars
const LOCALE = 'UPDATE'
const SRT = new SAPIRouter("Update");

//Functions
SRT.router.get('/', (req, res, next) => {
   res.status(400).send({message: 'Invalid request.'});
});

SRT.router.post('/', (req, res, next) => {
    res.status(400).send({message: 'Incomplete request.'});
})
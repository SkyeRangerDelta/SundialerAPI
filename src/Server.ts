// --- API Driver ---

//Imports
import dotenv from 'dotenv';
import startup from './modules/core/startup';
import Logger from "./config/Utils_Logger";

//Declarations
dotenv.config();
const LOCALE = 'Server Index';

//Functions
async function bootAPI() {
    //Init
    Logger.info(LOCALE, 'Booting API...');
    await startup.initAPI();
}

bootAPI();


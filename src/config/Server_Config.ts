// --- Server API Settings ---

//Imports
import dotenv from 'dotenv';

dotenv.config();

//Functions
const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 7000;

const SERVER = {
    hostname: API_HOST,
    port: API_PORT
};

const config = {
    server: SERVER
}

//Exports
export default config;

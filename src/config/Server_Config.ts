// --- Server API Settings ---

//Imports
import "https://deno.land/std@0.224.0/dotenv/load.ts";

//Functions
const API_HOST = Deno.env.get('API_HOST') || 'localhost';
const API_PORT = parseInt(`${Deno.env.get('API_PORT')}`) || 7000;

const SERVER = {
    hostname: API_HOST,
    port: API_PORT
};

const config = {
    server: SERVER
}

//Exports
export default config;

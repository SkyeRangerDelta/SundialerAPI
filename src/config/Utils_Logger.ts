// --- Logging Utility ---

//Imports
import { yellow, red, cyan } from "jsr:@hikyu/colors";

//Functions
const getTimestamp = (): string => {
    return new Date().toISOString();
}

const info = (locale: string, message: string) => {
    console.info(`[${getTimestamp()}] [INFO] [${locale}] ${message}`);
}

const warn = (locale: string, message: string) => {
    console.info(yellow(`[${getTimestamp()}] [WARN] [${locale}] ${message}`));
}

const error = (locale: string, message: string) => {
    console.info(red(`[${getTimestamp()}] [ERROR] [${locale}] ${message}`));
}

const debug = (locale: string, message: string) => {
    console.info(cyan(`[${getTimestamp()}] [DEBUG] [${locale}] ${message}`));
}

//Exports
export default {
    info,
    warn,
    error,
    debug
}
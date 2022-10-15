// --- Logging Utility ---

//Imports
import colors from 'colors/safe';

//Functions
const getTimestamp = (): string => {
    return new Date().toISOString();
}

const info = (locale: string, message: string) => {
    console.info(`[${getTimestamp()}] [INFO] [${locale}] ${message}`);
}

const warn = (locale: string, message: string) => {
    console.info(colors.yellow(`[${getTimestamp()}] [WARN] [${locale}] ${message}`));
}

const error = (locale: string, message: string) => {
    console.info(colors.red(`[${getTimestamp()}] [ERROR] [${locale}] ${message}`));
}

const debug = (locale: string, message: string) => {
    console.info(colors.cyan(`[${getTimestamp()}] [DEBUG] [${locale}] ${message}`));
}

//Exports
export default {
    info,
    warn,
    error,
    debug
}
// --- Logging Utility ---

//Imports
import colors from 'colors/safe';

//Functions
const getTimestamp = (): string => {
    return new Date().toISOString();
}

const info = (locale: string, message: string) => {
    console.info(`[${getTimestamp()}] [${locale}] [INFO] ${message}`);
}

const warn = (locale: string, message: string) => {
    console.info(colors.yellow(`[${getTimestamp()}] [${locale}] [WARN] ${message}`));
}

const error = (locale: string, message: string) => {
    console.info(colors.red(`[${getTimestamp()}] [${locale}] [ERROR] ${message}`));
}

const debug = (locale: string, message: string) => {
    console.info(colors.cyan(`[${getTimestamp()}] [${locale}] [DEBUG] ${message}`));
}

//Exports
export default {
    info,
    warn,
    error,
    debug
}
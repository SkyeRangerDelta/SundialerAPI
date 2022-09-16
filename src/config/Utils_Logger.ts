// --- Logging Utility ---

//Imports
import colors from 'colors/safe';

//Functions
const getTimestamp = (): string => {
    return new Date().toISOString();
}

const info = (data: string, message: string) => {
    console.info(colors.green(`[${getTimestamp()}] [${data}] [INFO] ${message}`));
}

//Exports
export default {
    info
}
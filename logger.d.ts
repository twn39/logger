export function info(message:string, data: object, extra: object, trace: boolean);
export function debug(message:string, data: object, extra: object, trace: boolean);
export function warning(message:string, data: object, extra: object, trace: boolean);
export function notice(message:string, data: object, extra: object, trace: boolean);
export function error(message:string, data: object, extra: object, trace: boolean);
export function critical(message:string, data: object, extra: object, trace: boolean);

interface Logger {
    info: any,
    debug: any,
    warning: any,
    notice: any,
    error: any,
    critical: any,
}
export function getLogger(level: string): Logger;


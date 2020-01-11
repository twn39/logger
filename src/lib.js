const levelList = {
    debug: {
        name: 'DEBUG',
        background: '#427b58',
    },
    info: {
        name: 'INFO',
        background: '#076678',
    },
    notice: {
        name: 'NOTICE',
        background: '#d65d0e',
    },
    warning: {
        name: 'WARNING',
        background: '#d79921',
    },
    error: {
        name: 'ERROR',
        background: '#cc241d',
    },
    critical: {
        name: 'CRITICAL',
        background: '#9d0006',
    }
};

const getLevel = (levelName) => {
    return levelList[levelName.toLowerCase()];
};

const log = level => (message, data = {}, extra = {}, trace = false) => {
    console.log(
        `[${new Date().toLocaleString()}]%c ${level.name} %c ${message} ${JSON.stringify(data)} ${JSON.stringify(extra)}`,
        `background: ${level.background};color: white;font-weight: bold`,
        'color: black'
    );
    if (trace) {
        console.trace(`trace stack: ${message}`);
    }
};

const _empty = (message, data, extra) => {};

export const debug = log(getLevel('debug'));
export const info = log(getLevel('info'));
export const notice = log(getLevel('notice'));
export const warning = log(getLevel('warning'));
export const error = log(getLevel('error'));
export const critical = log(getLevel('critical'));

export default {debug, info, notice, warning, error, critical}

const levelMap = {
    debug: {debug, info, notice, warning, error, critical},
    info: {debug: _empty, info, notice, warning, error, critical},
    notice: {debug: _empty, info: _empty, notice, warning, error, critical},
    warning: {debug: _empty, info: _empty, notice: _empty, warning, error, critical},
    error: {debug: _empty, info: _empty, notice: _empty, warning: _empty, error, critical},
    critical: {debug: _empty, info: _empty, notice: _empty, warning: _empty, error: _empty, critical}
};
export const getLogger = (level) => {
    return levelMap[level.toLowerCase()];
};

import {getLogger} from "../src/lib";

const {debug, info, notice, warning, error, critical} = getLogger('debug');

debug('this is debug message.', {a: 45, '45': 'erfgerge'});
info('this is debug message.', {a: 45, '45': 'erfgerge'}, {}, true);
notice('this is debug message.', {a: 45, '45': 'erfgerge'});
warning('this is debug message.', {a: 45, '45': 'erfgerge'});
error('this is debug message.', {a: 45, '45': 'erfgerge'});
critical('this is debug message.', {a: 45, '45': 'erfgerge'});


const commander = require('commander');

const PLUGIN_COMMAND_MAP = {
    'list': './list',
};

Object.keys(PLUGIN_COMMAND_MAP).forEach((cmd) => {
    // eslint-disable-next-line global-require
    require(PLUGIN_COMMAND_MAP[cmd]).createCommand(commander);
});

commander._name = 'ask demo';
commander
    .description('Demo plugin');

module.exports = { commander, PLUGIN_COMMAND_MAP: PLUGIN_COMMAND_MAP };

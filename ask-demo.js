#!/usr/bin/env node

require('module-alias/register');
const demoCommander = require('./plugin/demo-commander');

demoCommander.commander.parse(process.argv);

if (!process.argv.slice(2).length) {
    demoCommander.commander.outputHelp();
} else if (Object.keys(demoCommander.PLUGIN_COMMAND_MAP).indexOf(process.argv[2]) === -1) {
    console.error('Command not recognized. Please run "ask demo" to check the user instructions.');
    process.exit(1);
}

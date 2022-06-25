#!/usr/bin/env node

require('module-alias/register');

const { runner } = require('hygen')
const Logger = require('hygen/dist/logger').default
const path = require('path')
const defaultTemplates = path.join(__dirname, '_templates')

const { Command } = require('commander');
const program = new Command();

program.command('intent')
    .description('Generate a new Intent and handler')
    .argument('<name>', 'Name of intent, will be generated as {Name}Intent')
    .argument('[samples...]')
    .action(function (name, samples, cmdObj) {
        runner(['intent', 'new', name, '--samples', samples], {
            templates: defaultTemplates,
            cwd: process.cwd(),
            logger: new Logger(console.log.bind(console)),
            createPrompter: () => require('enquirer'),
            exec: (action, body) => {
                const opts = body && body.length > 0 ? { input: body } : {}
                return require('execa').shell(action, opts)
            },
            debug: !!process.env.DEBUG
        })
    });

program.parse(process.argv);

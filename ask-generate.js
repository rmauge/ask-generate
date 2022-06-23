#!/usr/bin/env node

require('module-alias/register');

const { runner } = require('hygen')
const Logger = require('hygen/dist/logger').default
const path = require('path')
const defaultTemplates = path.join(__dirname, '_templates')

const program = require('commander');

program
    .command('intent [name]')
    .action(function (name, cmdObj) {
        runner(['intent', 'new', name], {
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

const { AbstractCommand } = require('@src/commands/abstract-command');
const configureUi = require('@src/commands/configure/ui');
const optionModel = require('@src/commands/option-model');
const AuthorizationController = require('@src/controllers/authorization-controller');
const CONSTANTS = require('@src/utils/constants');
const jsonView = require('@src/view/json-view');
const Messenger = require('@src/view/messenger');

const ResourcesConfig = require('@src/model/resources-config');
const Manifest = require('@src/model/manifest');

class PluginListCommand extends AbstractCommand {
    name() {
        return 'list';
    }

    description() {
        return 'demo list plugins';
    }

    requiredOptions() {
        return [];
    }

    optionalOptions() {
        return [];
    }

    handle(cmd, cb) {
        Messenger.getInstance().info(`Running demo plugin list`);

        cb();

    }
}

module.exports = PluginListCommand;
module.exports.createCommand = new PluginListCommand(optionModel).createCommand();

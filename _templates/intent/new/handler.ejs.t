---
to: lambda/handlers/<%= name %>.js
---
const <%= Name %>IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === '<%= Name %>Intent';
    },
    handle(handlerInput) {
        const speakOutput = '<%= Name %> intent handler called';

        return handlerInput.responseBuilder
            .speak(speakOutput)
    }
};

module.exports =
    {
        <%= Name %>IntentHandler: <%= Name %>IntentHandler
    };

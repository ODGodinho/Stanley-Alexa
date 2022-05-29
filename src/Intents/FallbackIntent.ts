import { RequestHandler, HandlerInput } from "ask-sdk-core";
import { IsIntent } from "../Utilities/helpers";
import { IntentType } from "../Utilities/constants";
import i18n from "i18next";
import { MessagesKey } from "../Utilities/strings";
import { Response } from "ask-sdk-model";

export default class FallbackIntent implements RequestHandler {

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return IsIntent(handlerInput, IntentType.Fallback);
    }

    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const speechText = i18n.t(MessagesKey.FALLBACK_MSG);

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(i18n.t(MessagesKey.HELP_MSG))
            .getResponse();
    }

}

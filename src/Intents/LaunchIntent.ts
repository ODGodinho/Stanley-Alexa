import { RequestHandler, HandlerInput } from "ask-sdk-core";
import { RequestType } from "../Utilities/constants";
import { IsType } from "../Utilities/helpers";
import i18n from "i18next";
import { MessagesKey } from "../Utilities/strings";
import { Response } from "ask-sdk-model";

export default class LaunchIntent implements RequestHandler {

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return IsType(handlerInput, RequestType.Launch);
    }

    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const speechText = i18n.t(MessagesKey.WELCOME_SKILL);

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(i18n.t(MessagesKey.SKILL_NAME), speechText)
            .getResponse();
    }

}

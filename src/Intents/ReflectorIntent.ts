import { RequestHandler, getIntentName, HandlerInput } from "ask-sdk-core";
import { IsType } from "../Utilities/helpers";
import { RequestType } from "../Utilities/constants";
import i18n from "i18next";
import { MessagesKey } from "../Utilities/strings";
import { Response } from "ask-sdk-model";

export default class ReflectorIntent implements RequestHandler {

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return IsType(handlerInput, RequestType.Intent);
    }

    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const speechText = i18n.t(MessagesKey.REFLECTOR_MSG, {
            intentName: getIntentName(handlerInput.requestEnvelope),
        });

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18n.t(MessagesKey.SKILL_NAME), speechText)
            .getResponse();
    }

}

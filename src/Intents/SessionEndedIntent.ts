import { RequestHandler, HandlerInput } from "ask-sdk-core";
import { IsType } from "../Utilities/helpers";
import { RequestType } from "../Utilities/constants";
import i18n from "i18next";
import { MessagesKey } from "../Utilities/strings";
import { Response } from "ask-sdk-model";

export default class SessionEndedIntent implements RequestHandler {

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return IsType(handlerInput, RequestType.SessionEnded);
    }

    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const speechText = i18n.t(MessagesKey.GOODBYE_MSG);

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18n.t(MessagesKey.SKILL_NAME), speechText)
            .getResponse();
    }

}

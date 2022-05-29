import { ErrorHandler, HandlerInput } from "ask-sdk-core";
import { Response } from "ask-sdk-model";
import i18n from "i18next";
import { MessagesKey } from "../Utilities/strings";

/**
 * Unexpected errors which should be thrown when something
 * unexpected happens.
 */
export default class ErrorProcessorHandler implements ErrorHandler {

    public async canHandle(_handlerInput: HandlerInput, _error: Error): Promise<boolean> {
        return true;
    }

    public async handle(handlerInput: HandlerInput, error: Error): Promise<Response> {
        return handlerInput.responseBuilder
            .speak(i18n.t(MessagesKey.ERROR_MSG))
            .speak(error.message)
            .getResponse();
    }

}

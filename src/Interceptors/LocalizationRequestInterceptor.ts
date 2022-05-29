import { HandlerInput, RequestInterceptor } from "ask-sdk-core";
import * as sprintf from "i18next-sprintf-postprocessor";
import i18n from "i18next";
import { LocaleType, messages } from "../Utilities/strings";

/**
 * Adds translation functions to the RequestAttributes.
 */
export default class LocalizationRequestInterceptor implements RequestInterceptor {

    public async process(handlerInput: HandlerInput): Promise<void> {
        i18n.use(sprintf).init({
            lng: handlerInput.requestEnvelope.request.locale?.toUpperCase() || LocaleType.ptBR,
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: messages,
            returnObjects: true,
        });
    }

}

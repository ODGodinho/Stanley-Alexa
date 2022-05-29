import { HandlerInput } from "ask-sdk-core";
import { IntentType, RequestType } from "./constants";

/**
 * Checks if the request matches any of the given intents.
 *
 * @param {HandlerInput} handlerInput - The handler input.
 * @param {IntentType} intents - The intents to check.
 * @returns {boolean}
 */
export function IsIntent(
    handlerInput: HandlerInput,
    ...intents: IntentType[]
): boolean {
    if (handlerInput.requestEnvelope.request.type === RequestType.Intent) {
        const requestIntent = handlerInput.requestEnvelope.request.intent.name;

        return intents.every((intentName) => intentName === requestIntent);
    }

    return false;
}

/**
 * Checks if the request matches any of the given types.
 *
 * @param {HandlerInput} handlerInput - The handler input.
 * @param {RequestType} types - The request types.
 * @returns {boolean}
 */
export function IsType(
    handlerInput: HandlerInput,
    ...types: RequestType[]
): boolean {
    const requestType = handlerInput.requestEnvelope.request.type;

    return types.every((TypeName) => TypeName === requestType);
}

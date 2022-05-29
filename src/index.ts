import * as Alexa from "ask-sdk-core";

import LaunchIntent from "./Intents/LaunchIntent";
import HelpIntent from "./Intents/HelpIntent";
import StopIntent from "./Intents/StopIntent";
import ReflectorIntent from "./Intents/ReflectorIntent";
import FallbackIntent from "./Intents/FallbackIntent";
import HelloWorldIntent from "./Intents/HelloWorldIntent";
import SessionEndedIntent from "./Intents/SessionEndedIntent";
import GithubStarsIntent from "./Intents/Github/GithubStarsIntent";

import ErrorProcessorHandler from "./Handlers/ErrorProcessorHandler";

import LocalizationRequestInterceptor from "./Interceptors/LocalizationRequestInterceptor";

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        // Default intents
        new LaunchIntent(),
        new GithubStarsIntent(),
        new HelloWorldIntent(),
        new HelpIntent(),
        new StopIntent(),
        new SessionEndedIntent(),
        new FallbackIntent(),
        // ReflectorIntent
        new ReflectorIntent(),
    )
    .addErrorHandlers(
        new ErrorProcessorHandler(),
    )
    .addRequestInterceptors(
        new LocalizationRequestInterceptor(),
    )
    .lambda();

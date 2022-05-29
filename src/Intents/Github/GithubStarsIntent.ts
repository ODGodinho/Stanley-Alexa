import { RequestHandler, HandlerInput } from "ask-sdk-core";
import { IsIntent } from "../../Utilities/helpers";
import { IntentType } from "../../Utilities/constants";
import i18n from "i18next";
import axios from "axios";
import { MessagesKey } from "../../Utilities/messages";
import { Response } from "ask-sdk-model";

interface GithubResponse {
    stargazers_count: number
}

export default class GithubStarsIntent implements RequestHandler {

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return IsIntent(handlerInput, IntentType.GithubStars);
    }

    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const res = await axios.get<GithubResponse>("https://api.github.com/repos/ODGodinho/Stanley-Alexa");
        const speechText = i18n.t(MessagesKey.GITHUB_STARS, { "stargazers_count": res.data.stargazers_count });

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18n.t(MessagesKey.SKILL_NAME), speechText)
            .getResponse();
    }

}

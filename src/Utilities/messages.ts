export enum MessagesKey {
    SKILL_NAME = "SKILL_NAME",
    WELCOME_SKILL = "WELCOME_MSG",
    GOODBYE_MSG = "GOODBYE_MSG",
    HELLO_MSG = "HELLO_MSG",
    GITHUB_STARS = "GITHUB_FOLLOWERS",
    HELP_MSG = "HELP_MSG",
    ERROR_MSG = "ERROR_MSG",
    REFLECTOR_MSG = "REFLECTOR_MSG",
    FALLBACK_MSG = "FALLBACK_MSG",
}

export type MessagesInterface = {
    [key in MessagesKey]: string;
};

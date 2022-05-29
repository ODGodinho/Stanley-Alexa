export enum RequestType {
    Launch = "LaunchRequest",
    Intent = "IntentRequest",
    SessionEnded = "SessionEndedRequest",
    SystemExceptionEncountered = "System.ExceptionEncountered",
}

export enum IntentType {
    Help = "AMAZON.HelpIntent",
    Stop = "AMAZON.StopIntent",
    Cancel = "AMAZON.CancelIntent",
    Fallback = "AMAZON.FallbackIntent",
    HelloWorld = "HelloWorldIntent",
    PasswordInfo = "PasswordInfoIntent",
    FollowersGithub = "FollowersGithubIntent",
}

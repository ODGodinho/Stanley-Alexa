import { MessagesKey, MessagesInterface } from "../../Utilities/strings";

const Messages: MessagesInterface = {
    [MessagesKey.SKILL_NAME]: "Stanley Alexa",
    [MessagesKey.WELCOME_SKILL]: "Bem vindo a Stanley-Alexa, como posso ajudar?",
    [MessagesKey.HELLO_MSG]: "Ola Mundo!",
    [MessagesKey.GITHUB_STARS]: "Atualmente esse templete possui {{stargazers_count}} estrelas no Github.",
    [MessagesKey.HELP_MSG]: "Você pode pedir pela senha!",
    [MessagesKey.GOODBYE_MSG]: "Ate Logo.",
    [MessagesKey.REFLECTOR_MSG]: "Acaba de Ativar a Intenção {{intentName}}",
    [MessagesKey.FALLBACK_MSG]: "Eu não entendi oque ele falou.",
    [MessagesKey.ERROR_MSG]: "Só da ideia errada zé. Meu sistema até deu erro.",
};

export default Messages;

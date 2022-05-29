if [ -f .env ]
then
  export $(cat .env | xargs)
fi

if [ ! $ALEXA_SKILL_UUID ]
then
  echo "ALEXA_SKILL_UUID .env file is empty"
  exit 1
fi

ask init --hosted-skill-id amzn1.ask.skill.$ALEXA_SKILL_UUID

cp -R ./dist/skill-package/ ./
cp -R ./dist/ask-resources.json ask-resources.json
cp -R ./dist/.ask ./
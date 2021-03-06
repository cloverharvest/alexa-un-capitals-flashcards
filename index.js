/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
 http://aws.amazon.com/apache2.0/
 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple United Nations Capitals Flash Card skill. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */


'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */

 /* FOR UNITED NATIONS MEMBER STATES */

var questions = [
    {
        "What is the capital of Afghanistan?": [
            "kabul"
        ]
    },
    {
        "What is the capital of Albania?": [
            "tirana"

        ]
    },
    {
        "What is the capital of Algeria?": [
            "algiers"
        ]
    },
    {
        "What is the capital of Andorra?": [
            "andorra la vella"
        ]
    },
    {
        "What is the capital of Angola?": [
            "luanda"
        ]
    },
    {
        "What is the capital of Antigua and Barbuda?": [
            "saint john's"
        ]
    },
    {
        "What is the capital of Argentina?": [
            "buenos aires"
        ]
    },
    {
        "What is the capital of Armenia?": [
            "yerevan"
        ]
    },
    {
        "What is the capital of Australia?": [
            "canberra"
        ]
    },
    {
        "What is the capital of Austria?": [
            "vienna"
        ]
    },
    {
        "What is the capital of Azerbaijan?": [
            "Baku"
        ]
    },
    {
        "What is the capital of Bahamas?": [
            "Nassau"
        ]
    },
    {
        "What is the capital of Bahrain?": [
            "Manama"
        ]
    },
    {
        "What is the capital of Bangladesh ?": [
            "Dhaka"
        ]
    },
    {
        "What is the capital of Barbados?": [
            "Bridgetown"
        ]
    },
    {
        "What is the capital of Belarus?": [
            "Minsk"
        ]
    },
    {
        "What is the capital of Belgium?": [
            "Brussels"
        ]
    },
    {
        "What is the capital of Belize?": [
            "Belmopan"
        ]
    },
    {
        "What is the capital of Benin?": [
            "Porto-Novo"
        ]
    },
    {
        "What is the capital of Bhutan?": [
            "Thimphu"
        ]
    },
    {
        "What is the capital of Bolivia?": [
            "La Paz"
        ]
    },
    {
        "What is the capital of Bosnia and Herzegovina?": [
            "Sarajevo"
        ]
    },
    {
        "What is the capital of Botswana?": [
            "Gaborone"
        ]
    },
    {
        "What is the capital of Brazil?": [
            "Brasilia"
        ]
    },
    {
        "What is the capital of Brunei?": [
            "Bandar Seri Begawan"
        ]
    },
    {
        "What is the capital of Bulgaria?": [
            "Sofia"
        ]
    },
    {
        "What is the capital of Burkina Faso?": [
            "Ouagadougou"
        ]
    },
    {
        "What is the capital of Burundi?": [
            "Bujumbura"
        ]
    },
    {
        "What is the capital of Cambodia?": [
            "Phnom Penh"
        ]
    },
    {
        "What is the capital of Cameroon?": [
            "Yaounde"
        ]
    },
    {
        "What is the capital of Canada?": [
            "Ottawa"
        ]
    },
    {
        "What is the capital of Cape Verde?": [
            "Praia"
        ]
    },
    {
        "What is the capital of Central African Republic?": [
            "Bangui"
        ]
    },
    {
        "What is the capital of Chad?": [
            "N'Djamena"
        ]
    },
    {
        "What is the capital of Chile?": [
            "Santiago"
        ]
    },
    {
        "What is the capital of China?": [
            "Beijing"
        ]
    },
    {
        "What is the capital of Colombia?": [
            "Bogota"
        ]
    },
    {
        "What is the capital of the Republic of Congo?": [
            "Brazzaville"
        ]
    },
    {
        "What is the capital of Democratic Republic of Congo?": [
            "Kinshasa"
        ]
    },
    {
        "What is the capital of Costa Rica?": [
            "San Jose"
        ]
    },
    {
        "What is the capital of Cote d'Ivoire?": [
            "Yamoussoukro"
        ]
    },
    {
        "What is the capital of Croatia?": [
            "Zagreb"
        ]
    },
    {
        "What is the capital of Cuba?": [
            "Havana"
        ]
    },
    {
        "What is the capital of Cyprus?": [
            "Nicosia"
        ]
    },
    {
        "What is the capital of Czech Republic?": [
            "Prague"
        ]
    },
    {
        "What is the capital of Denmark?": [
            "Copenhagen"
        ]
    },
    {
        "What is the capital of Djibouti?": [
            "Djibouti"
        ]
    },
    {
        "What is the capital of Dominica?": [
            "Roseau"
        ]
    },
    {
        "What is the capital of Dominican Republic?": [
            "Santo Domingo"
        ]
    },
    {
        "What is the capital of East Timor?": [
            "Dili"
        ]
    },
    {
        "What is the capital of Ecuador?": [
            "Quito"
        ]
    },
    {
        "What is the capital of Egypt?": [
            "Cairo"
        ]
    },
    {
        "What is the capital of El Salvador?": [
            "San Salvador"
        ]
    },
    {
        "What is the capital of Equatorial Guinea?": [
            "Malabo"
        ]
    },
    {
        "What is the capital of Eritrea?": [
            "Asmara"
        ]
    },
    {
        "What is the capital of Estonia?": [
            "Tallinn"
        ]
    },
    {
        "What is the capital of Ethiopia?": [
            "Addis Ababa"
        ]
    },
    {
        "What is the capital of Fiji?": [
            "Suva"
        ]
    },
    {
        "What is the capital of Finland?": [
            "Helsinki"
        ]
    },
    {
        "What is the capital of France?": [
            "Paris"
        ]
    },
    {
        "What is the capital of Gabon?": [
            "Libreville"
        ]
    },
    {
        "What is the capital of Gambia?": [
            "Banjul"
        ]
    },
    {
        "What is the capital of Georgia?": [
            "Tblisi"
        ]
    },
    {
        "What is the capital of Germany?": [
            "Berlin"
        ]
    },
    {
        "What is the capital of Ghana?": [
            "Accra"
        ]
    },
    {
        "What is the capital of Greece?": [
            "Athens"
        ]
    },
    {
        "What is the capital of Grenada?": [
            "Saint George's"
        ]
    },
    {
        "What is the capital of Guatemala?": [
            "Guatemala City"
        ]
    },
    {
        "What is the capital of Guinea?": [
            "Conakry"
        ]
    },
    {
        "What is the capital of Guinea-Bissau?": [
            "Bissau"
        ]
    },
    {
        "What is the capital of Guyana?": [
            "Georgetown"
        ]
    },
    {
        "What is the capital of Haiti?": [
            "Port-au-Prince"
        ]
    },
    {
        "What is the capital of Honduras?": [
            "Tegucigalpa"
        ]
    },
    {
        "What is the capital of Hungary?": [
            "Budapest"
        ]
    },
    {
        "What is the capital of Iceland?": [
            "Reykjavik"
        ]
    },
    {
        "What is the capital of India?": [
            "New Delhi"
        ]
    },
    {
        "What is the capital of Indonesia?": [
            "Jakarta"
        ]
    },
    {
        "What is the capital of Iran?": [
            "Tehran"
        ]
    },
    {
        "What is the capital of Iraq?": [
            "Baghdad"
        ]
    },
    {
        "What is the capital of Ireland?": [
            "Dublin"
        ]
    },
    {
        "What is the capital of Israel?": [
            "Jerusalem"
        ]
    },
    {
        "What is the capital of Italy?": [
            "Rome"
        ]
    },
    {
        "What is the capital of Jamaica?": [
            "Kingston"
        ]
    },
    {
        "What is the capital of Japan?": [
            "Tokyo"
        ]
    },
    {
        "What is the capital of Jordan?": [
            "Amman"
        ]
    },
    {
        "What is the capital of Kazakhstan?": [
            "Astana"
        ]
    },
    {
        "What is the capital of Kenya?": [
            "Nairobi"
        ]
    },
    {
        "What is the capital of Kiribati?": [
            "Tarawa"
        ]
    },
    {
        "What is the capital of North Korea?": [
            "Pyongyang"
        ]
    },
    {
        "What is the capital of South Korea?": [
            "Seoul"
        ]
    },
    {
        "What is the capital of Kuwait?": [
            "Kuwait City"
        ]
    },
    {
        "What is the capital of Kyrgyzstan?": [
            "Bishtek"
        ]
    },
    {
        "What is the capital of Laos?": [
            "Vientiane"
        ]
    },
    {
        "What is the capital of Latvia?": [
            "Riga"
        ]
    },
    {
        "What is the capital of Lebanon?": [
            "Beirut"
        ]
    },
    {
        "What is the capital of Lesotho?": [
            "Maseru"
        ]
    },
    {
        "What is the capital of Liberia?": [
            "Monrovia"
        ]
    },
    {
        "What is the capital of Libya?": [
            "Tripoli"
        ]
    },
    {
        "What is the capital of Lichtenstein?": [
            "Vaduz"
        ]
    },
    {
        "What is the capital of Lithuania?": [
            "Vilnius"
        ]
    },
    {
        "What is the capital of Luxembourg?": [
            "Luxembourg"
        ]
    },
    {
        "What is the capital of Macedonia?": [
            "Skopje"
        ]
    },
    {
        "What is the capital of Madagascar?": [
            "Antananarivo"
        ]
    },
    {
        "What is the capital of Malawi?": [
            "Lelongwe"
        ]
    },
    {
        "What is the capital of Malaysia?": [
            "Kuala Lumpur"
        ]
    },
    {
        "What is the capital of Maldives?": [
            "Male"
        ]
    },
    {
        "What is the capital of Mali?": [
            "Bamako"
        ]
    },
    {
        "What is the capital of Malta?": [
            "Valletta"
        ]
    },
    {
        "What is the capital of Marshall Islands?": [
            "Majuro"
        ]
    },
    {
        "What is the capital of Mauritania?": [
            "Nouakchott"
        ]
    },
    {
        "What is the capital of Mauritius?": [
            "Port Louis"
        ]
    },
    {
        "What is the capital of Mexico?": [
            "Mexico City"
        ]
    },
    {
        "What is the capital of Micronesia?": [
            "Palikir"
        ]
    },
    {
        "What is the capital of Moldova?": [
            "Chisinau"
        ]
    },
    {
        "What is the capital of Monaco?": [
            "Monaco"
        ]
    },
    {
        "What is the capital of Mongolia?": [
            "Ulaanbaatar"
        ]
    },
    {
        "What is the capital of Montenegro?": [
            "Podgorica"
        ]
    },
    {
        "What is the capital of Morocco?": [
            "Rabat"
        ]
    },
    {
        "What is the capital of Mozambique?": [
            "Maputo"
        ]
    },
    {
        "What is the capital of Myanmar": [
            "Naypyidaw"
        ]
    },
    {
        "What is the capital of Namibia?": [
            "Windhoek"
        ]
    },
    {
        "What is the capital of Nauru?": [
            "Yaren District"
        ]
    },
    {
        "What is the capital of Nepal?": [
            "Kathmandu"
        ]
    },
    {
        "What is the capital of Netherlands?": [
            "Amsterdam"
        ]
    },
    {
        "What is the capital of New Zealand?": [
            "Wellington"
        ]
    },
    {
        "What is the capital of Nicaragua?": [
            "Managua"
        ]
    },
    {
        "What is the capital of Niger?": [
            "Niamey"
        ]
    },
    {
        "What is the capital of Nigeria?": [
            "Abuja"
        ]
    },
    {
        "What is the capital of Norway?": [
            "Oslo"
        ]
    },
    {
        "What is the capital of Oman?": [
            "Muscat"
        ]
    },
    {
        "What is the capital of Pakistan?": [
            "Islamabad"
        ]
    },
    {
        "What is the capital of Palau?": [
            "Koror"
        ]
    },
    {
        "What is the capital of Panama?": [
            "Panama City"
        ]
    },
    {
        "What is the capital of Papua New Guinea?": [
            "Port Moresby"
        ]
    },
    {
        "What is the capital of Paraguay?": [
            "Asuncion"
        ]
    },
    {
        "What is the capital of Peru?": [
            "Lima"
        ]
    },
    {
        "What is the capital of Philippines?": [
            "Manila"
        ]
    },
    {
        "What is the capital of Poland?": [
            "Warsaw"
        ]
    },
    {
        "What is the capital of Portugal?": [
            "Lisbon"
        ]
    },
    {
        "What is the capital of Qatar?": [
            "Doha"
        ]
    },
    {
        "What is the capital of Romania?": [
            "Bucharest"
        ]
    },
    {
        "What is the capital of Russia?": [
            "Moscow"
        ]
    },
    {
        "What is the capital of Rwanda?": [
            "Kigali"
        ]
    },
    {
        "What is the capital of Saint Kitts and Nevis?": [
            "Bassetterre"
        ]
    },
    {
        "What is the capital of Saint Lucia?": [
            "Castries"
        ]
    },
    {
        "What is the capital of Saint Vincent and the Grenadines?": [
            "Kingstown"
        ]
    },
    {
        "What is the capital of Samoa?": [
            "Apia"
        ]
    },
    {
        "What is the capital of San Marino?": [
            "San Marino"
        ]
    },
    {
        "What is the capital of Sao Tome and Principe?": [
            "Sao Tome"
        ]
    },
    {
        "What is the capital of Saudi Arabia?": [
            "Riyadh"
        ]
    },
    {
        "What is the capital of Senegal?": [
            "Dakar"
        ]
    },
    {
        "What is the capital of Serbia?": [
            "Belgrade"
        ]
    },
    {
        "What is the capital of Seychelles?": [
            "Victoria"
        ]
    },
    {
        "What is the capital of Sierra Leone?": [
            "Freetown"
        ]
    },
    {
        "What is the capital of Singapore?": [
            "Singapore"
        ]
    },
    {
        "What is the capital of Slovakia?": [
            "Bratislava"
        ]
    },
    {
        "What is the capital of Slovenia?": [
            "Ljubljana"
        ]
    },
    {
        "What is the capital of Solomon Islands?": [
            "Honiara"
        ]
    },
    {
        "What is the capital of Somalia?": [
            "Mogadishu"
        ]
    },
    {
        "What is the capital of South Africa?": [
            "Pretoria"
        ]
    },
    {
        "What is the capital of Spain?": [
            "Madrid"
        ]
    },
    {
        "What is the capital of Sri Lanka?": [
            "Colombo"
        ]
    },
    {
        "What is the capital of Sudan?": [
            "Khartoum"
        ]
    },
    {
        "What is the capital of Suriname?": [
            "Paramaribo"
        ]
    },
    {
        "What is the capital of Swaziland?": [
            "Mbabana"
        ]
    },
    {
        "What is the capital of Sweden?": [
            "Stockholm"
        ]
    },
    {
        "What is the capital of Switzerland?": [
            "Bern"
        ]
    },
    {
        "What is the capital of Syria?": [
            "Damascus"
        ]
    },
    {
        "What is the capital of Tajikistan?": [
            "Dushanbe"
        ]
    },
    {
        "What is the capital of Tanzania?": [
            "Dar es Salaam"
        ]
    },
    {
        "What is the capital of Thailand?": [
            "Bangkok"
        ]
    },
    {
        "What is the capital of Togo?": [
            "Lome"
        ]
    },
    {
        "What is the capital of Tonga?": [
            "Nuku alofa"
        ]
    },
    {
        "What is the capital of Trinidad and Tobago?": [
            "Port-of-Spain"
        ]
    },
    {
        "What is the capital of Tunisia?": [
            "Tunis"
        ]
    },
    {
        "What is the capital of Turkey?": [
            "Ankara"
        ]
    },
    {
        "What is the capital of Turkmenistan?": [
            "Ashgabat"
        ]
    },
    {
        "What is the capital of Tuvalu?": [
            "Funafuti"
        ]
    },
    {
        "What is the capital of Uganda?": [
            "Kampala"
        ]
    },
    {
        "What is the capital of Ukraine?": [
            "Kiev"
        ]
    },
    {
        "What is the capital of United Arab Emirates?": [
            "Abu Dhabi"
        ]
    },
    {
        "What is the capital of United Kingdom?": [
            "London"
        ]
    },
    {
        "What is the capital of United States?": [
            "Washington"
        ]
    },
    {
        "What is the capital of Uruguay?": [
            "Montevideo"
        ]
    },
    {
        "What is the capital of Uzbekistan?": [
            "Tashkent"
        ]
    },
    {
        "What is the capital of Vanuatu?": [
            "Port Vila"
        ]
    },
    {
        "What is the capital of Venezuela?": [
            "Caracas"
        ]
    },
    {
        "What is the capital of Vietnam?": [
            "Hanoi"
        ]
    },
    {
        "What is the capital of Yemen?": [
            "Sanaa"
        ]
    },
    {
        "What is the capital of Zambia?": [
            "Lusaka"
        ]
    },
    {
        "What is the capital of Zimbabwe?": [
            "Harare"
        ]
    },
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
            handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 1;
var GAME_LENGTH = 5;
// Be sure to change this for your skill.
var CARD_TITLE = "U. N. Capitals Flash Cards";

function getWelcomeResponse(callback) {
    // Be sure to change this for your skill.
    var sessionAttributes = {},
        speechOutput = "Let's learn about capitals of the United Nations member states. I will ask you about " + GAME_LENGTH.toString()
            + " capitals, try to get as many right as you can. Just say the name of the capital. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]]),
        repromptText = spokenQuestion,

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += ""
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first capital city.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a known capital " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && intent.slots.Answer.value.toUpperCase() === correctAnswerText.toUpperCase()) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for learning the capital cities of the United Nations member states!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]]);
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText =  spokenQuestion ;
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText +=  ""
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you to provide the name of the capital of a member states of the United Nations. I will provide the name of the member state, you will need to provide the name of its capital city. "
        + "For example, If the member state is Switzerland, you would say Bern. To start a new game at any time, say, start new game. "
        + "To repeat the last member state, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer, respond with the correct capital. "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a custom closing statment when the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Thanks for playing U. N. Capitals Flash Cards!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return 1;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

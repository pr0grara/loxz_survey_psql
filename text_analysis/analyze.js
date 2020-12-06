"use strict";
require("dotenv").config({ path: '../.env'});
const piiRecognition = require("./resources/pii_recognition.js");
const keyPhraseExtraction = require("./resources/key_phrase_extractor.js");
const linkedEntityRecognition = require("./resources/linked_entity_recognition.js");
const entityRecognition = require("./resources/entity_recognition.js");
const sentimentAnalysis = require("./resources/sentiment_analysis.js");

const {
  TextAnalyticsClient,
  AzureKeyCredential,
} = require("@azure/ai-text-analytics");

const key = process.env.TEXT_ANALYSIS_KEY_1;
const endpoint = process.env.ENDPOINT;

const textAnalyticsClient = new TextAnalyticsClient(
  endpoint,
  new AzureKeyCredential(key)
);

async function analyze(text) {
  var aiAnalysis = {};
  // aiAnalysis["sentiment"] = await sentimentAnalysis(textAnalyticsClient, text);
  // await entityRecognition(textAnalyticsClient, text);
  // await linkedEntityRecognition(textAnalyticsClient, text);
  aiAnalysis["keyPhrases"] = await keyPhraseExtraction(textAnalyticsClient, text);
  // await piiRecognition(textAnalyticsClient, text);
  return aiAnalysis;
}

run(["hello world marketing salesforce crm return on investment roi"])

module.exports = analyze;
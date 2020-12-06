async function piiRecognition(client, documents) {
  const results = await client.recognizePiiEntities(documents, "en");
  for (const result of results) {
    if (result.error === undefined) {
      console.log("Redacted Text: ", result.redactedText);
      console.log(" -- Recognized PII entities for input", result.id, "--");
      for (const entity of result.entities) {
        console.log(
          entity.text,
          ":",
          entity.category,
          "(Score:",
          entity.confidenceScore,
          ")"
        );
      }
    } else {
      console.error("Encountered an error:", result.error);
    }
  }
}

module.exports = piiRecognition;

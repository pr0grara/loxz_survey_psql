async function keyPhraseExtraction(client, keyPhrasesInput) {
  const keyPhraseResult = await client.extractKeyPhrases(keyPhrasesInput);

  keyPhraseResult.forEach((document) => {
    console.log(`ID: ${document.id}`);
    console.log(`\tDocument Key Phrases: ${document.keyPhrases}`);
  });

  return keyPhraseResult;
}

module.exports = keyPhraseExtraction;

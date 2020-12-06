async function linkedEntityRecognition(client, linkedEntityInput) {
  const entityResults = await client.recognizeLinkedEntities(linkedEntityInput);

  entityResults.forEach((document) => {
    console.log(`Document ID: ${document.id}`);
    document.entities.forEach((entity) => {
      console.log(
        `\tName: ${entity.name} \tID: ${entity.dataSourceEntityId} \tURL: ${entity.url} \tData Source: ${entity.dataSource}`
      );
      console.log(`\tMatches:`);
      entity.matches.forEach((match) => {
        console.log(
          `\t\tText: ${match.text} \tScore: ${match.confidenceScore.toFixed(2)}`
        );
      });
    });
  });
}

module.exports = linkedEntityRecognition;

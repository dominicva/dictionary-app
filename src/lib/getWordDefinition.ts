const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getWordDefinition = async word => {
  const data = await fetch(`${BASE_URL}${word}`)
    .then(r => r.json())
    .catch(e =>
      console.error(`ERROR: failed to find definition for ${word}\n\n\t${e}`)
    );

  const { word: newWord, meanings, phonetics, sourceUrls } = data[0];
  const { text, audio } = phonetics.find(
    o =>
      Object.hasOwn(o, "audio") &&
      Object.hasOwn(o, "text") &&
      o.audio.length > 0 &&
      o.text.length > 0
  );

  return {
    word: newWord,
    source: sourceUrls[0],
    phonetic: phonetics[0].text,
    text,
    audio,
    meanings,
  };
};

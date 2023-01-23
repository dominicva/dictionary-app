import React, { useState } from "react";
import Meaning from "./components/Meaning";
import searchIcon from "./assets/images/icon-search.svg";

function App() {
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [source, setSource] = useState("");
  const [meanings, setMeanings] = useState([]);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      const word = e.target[0].value;
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      ).then(r => r.json());
      const { meanings, phonetics, sourceUrls } = res[0];
      const { text, audio } = phonetics.find(
        o =>
          Object.hasOwn(o, "audio") &&
          Object.hasOwn(o, "text") &&
          o.audio.length > 0 &&
          o.text.length > 0
      );

      setMeanings(meanings);
      setWord(word);
      setPhonetic(text);
      setAudioUrl(audio);
      setSource(sourceUrls[0] ?? "no source URL found");
    } catch (error) {
      console.error(
        `ERROR: could not find definition for ${word}\n\n\t${error}`
      );
    }
  }

  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <div>logo</div>
        <select name="font" id="font">
          <option value="">Sans Serif</option>
          <option value="">Serif</option>
          <option value="">Mono</option>
        </select>
        <input type="checkbox" className="block" />
      </header>
      <form className="mt-6 mb-7 flex justify-center" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Search for any word" />
          <button>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
      <section>
        <div className="mb-8 flex justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold">{word}</h1>
            <p>/{phonetic}</p>
          </div>
          <button>
            <a href={audioUrl} target="_blank">
              Play
            </a>
          </button>
        </div>

        {meanings.map(({ partOfSpeech, definitions, synonyms }) => (
          <Meaning
            partOfSpeech={partOfSpeech}
            definitions={definitions}
            synonyms={synonyms}
          />
        ))}

        <hr className="mt-8 mb-6" />
        <div>
          <h4>Source</h4>
          <a href={source} target="_blank">
            {source}
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Meaning from "./components/Meaning";
import logo from "./assets/images/logo.svg";
import moonIcon from "./assets/images/icon-moon.svg";
import searchIcon from "./assets/images/icon-search.svg";

function App() {
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [source, setSource] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [theme, setTheme] = useState("dark");

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
    <div className={`p-6 ${theme}`}>
      <Header />

      <form className="mt-6 mb-7 flex" onSubmit={handleSubmit}>
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search for any word"
            className="h-12 w-full rounded-2xl border-none bg-gray-200"
          />
          <button className="absolute right-4 top-1/3">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
      <section>
        <div className="mb-8 flex justify-between">
          <div>
            <h1 className="mb-2 font-sans text-3xl">{word}</h1>
            <p className="text-lg text-purple-500">/{phonetic}</p>
          </div>
          <button>
            <a href={audioUrl} target="_blank">
              Play
            </a>
          </button>
        </div>

        {meanings.map(({ partOfSpeech, definitions, synonyms }) => (
          <Meaning
            key={`${partOfSpeech}${Math.random()}`}
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

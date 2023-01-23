import React, { useState } from "react";
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
  const [theme, setTheme] = useState("light");

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
    <div className="p-6">
      <header className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <select name="font" id="font">
          <option value="">Sans Serif</option>
          <option value="">Serif</option>
          <option value="">Mono</option>
        </select>

        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <img src={moonIcon} alt="Color mode" />
          </span>
        </label>
      </header>
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
            <h1 className="mb-2 text-3xl font-bold">{word}</h1>
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

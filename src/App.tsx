import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Layout from "./components/Layout";
import { FontContext, ThemeContext } from "./Contexts";
import NoResults from "./components/NoResults";

function App() {
  const [theme, setTheme] = useState("light");
  const [fontType, setFontType] = useState("sans");
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [source, setSource] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [APIError, setAPIError] = useState(false);
  const [inputError, setInputError] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const word = e.target[0].value.trim();

    if (word.length > 0) {
      setInputError(false);
    } else {
      setInputError(true);
    }

    try {
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
      setAPIError(false);
    } catch (error) {
      console.error(
        `ERROR: could not find definition for ${word}\n\n\t${error}`
      );
      setAPIError(true);
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <FontContext.Provider value={fontType}>
        <Layout>
          <div className="m-auto max-w-3xl">
            <Header setFontType={setFontType} setTheme={setTheme} />
            <Search inputError={inputError} onSubmit={handleSubmit} />
            {meanings.length > 0 && !APIError ? (
              <Results
                word={word}
                phonetic={phonetic}
                audioUrl={audioUrl}
                source={source}
                meanings={meanings}
              />
            ) : inputError ? null : (
              <NoResults />
            )}
          </div>
        </Layout>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

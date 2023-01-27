import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import { FontContext, ThemeContext } from "./Contexts";
import Layout from "./components/Layout";

function App() {
  const [theme, setTheme] = useState("light");
  const [fontType, setFontType] = useState("sans");
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
    <ThemeContext.Provider value={theme}>
      <FontContext.Provider value={fontType}>
        <Layout>
          <Header setFontType={setFontType} setTheme={setTheme} />
          <Search onSubmit={handleSubmit} />
          {meanings.length > 0 ? (
            <Results
              word={word}
              phonetic={phonetic}
              audioUrl={audioUrl}
              source={source}
              meanings={meanings}
            />
          ) : null}
        </Layout>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

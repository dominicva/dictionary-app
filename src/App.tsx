import { useState } from "react";
import { FontContext, ThemeContext } from "./Contexts";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Layout from "./components/Layout";
import NoResults from "./components/NoResults";
import { getWordDefinition } from "./lib/getWordDefinition";

const initialResults = {
  word: "",
  source: "",
  phonetic: "",
  text: "",
  audio: "",
  meanings: [],
};

function App() {
  const [theme, setTheme] = useState("light");
  const [fontType, setFontType] = useState("sans");
  const [results, setResults] = useState(initialResults);
  const [APIError, setAPIError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [firstPageLoad, setFirstPageLoad] = useState(true);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const inputWord = e.target[0].value.trim();

    if (inputWord.length > 0) {
      setInputError(false);
    } else {
      setInputError(true);
    }

    try {
      const data = await getWordDefinition(inputWord);
      setResults({ ...data });
      setAPIError(false);
      setFirstPageLoad(false);
    } catch (error) {
      console.error(
        `ERROR: could not find definition for ${inputWord}\n\n\t${error}`
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
            {APIError || results.word.length === 0 ? (
              <NoResults firstPageLoad={firstPageLoad} />
            ) : (
              <Results {...results} />
            )}
          </div>
        </Layout>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

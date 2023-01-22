import searchIcon from "./assets/images/icon-search.svg";

function App() {
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
      <form className="mt-6 mb-7 flex justify-center">
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
            <h1>keyboard</h1>
            <p>/'ki:add</p>
          </div>
          <button>Play</button>
        </div>
        <h2>Noun</h2>
        <h3>Meaning</h3>
        <ul>
          <li>defino</li>
          <li>lorem</li>
          <li>ipsum</li>
        </ul>
        <hr />
        <div>
          <h4>Source</h4>
          <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank">
            https://en.wiktionary.org/wiki/keyboard
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

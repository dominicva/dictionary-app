import Meaning from "./Meaning";
import newWindowIcon from "../assets/images/icon-new-window.svg";

export default function Results({
  word,
  phonetic,
  audioUrl,
  source,
  meanings,
}) {
  return (
    <section>
      <div className="mb-8 flex justify-between">
        <div>
          <h1 className="mb-2 font-sans text-3xl">{word}</h1>
          <p className="text-lg text-purple">{phonetic}</p>
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

      <hr className="mt-8 mb-6 text-gray-light" />
      <div>
        <h4>
          <span className="border-b-1 text-sm text-gray-lighter">Source</span>
        </h4>
        <a href={source} target="_blank" className="flex gap-2 ">
          <span className="border-b-1 border-gray-light text-sm text-gray-dark">
            {source}
          </span>
          <img src={newWindowIcon} alt="external link" />
        </a>
      </div>
    </section>
  );
}

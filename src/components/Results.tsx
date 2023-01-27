import Meaning from "./Meaning";
import newWindowIcon from "../assets/images/icon-new-window.svg";
import playIcon from "../assets/images/icon-play.svg";

export default function Results({
  word,
  phonetic,
  audioUrl,
  source,
  meanings,
}) {
  return (
    <section>
      <div className="mb-8 flex justify-between md:mb-10">
        <div>
          <h1 className="mb-2 text-3xl dark:text-white md:mb-4 md:text-6xl">
            {word}
          </h1>
          <p className="text-lg text-purple md:text-2xl">{phonetic}</p>
        </div>
        <button>
          <a href={audioUrl} target="_blank">
            <img
              src={playIcon}
              alt="Play button"
              className="inline-block w-12 md:w-20"
            />
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

      <hr className="mt-8 mb-6 text-gray-light dark:text-gray" />
      <div>
        <h4>
          <span className="border-b-1 text-sm text-gray-lighter">Source</span>
        </h4>
        <a href={source} target="_blank" className="flex gap-2 ">
          <span className="border-b-1 border-gray-light text-sm text-gray-dark dark:border-gray dark:text-gray-lighter">
            {source}
          </span>
          <img src={newWindowIcon} alt="external link" />
        </a>
      </div>
    </section>
  );
}

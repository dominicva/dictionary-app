import Meaning from "./Meaning";

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

      <hr className="mt-8 mb-6" />
      <div>
        <h4>Source</h4>
        <a href={source} target="_blank">
          {source}
        </a>
      </div>
    </section>
  );
}

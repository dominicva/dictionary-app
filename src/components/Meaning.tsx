export default function Meaning({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="mb-8">
      <h2 className="mb-8 font-bold italic">{partOfSpeech}</h2>
      <h3 className="mb-4">Meaning</h3>
      <ul className="ml-8 list-inside list-disc">
        {definitions.map(({ definition, example }) => (
          <li
            key={`${definition}${Math.random()}`}
            className="mb-3 marker:text-purple-700"
            style={{ textIndent: "-2rem" }}
          >
            <span className="ml-4">
              {definition}
              {example ? <q>{example}</q> : null}
            </span>
          </li>
        ))}
      </ul>
      <div>
        {partOfSpeech === "noun" ? (
          <>
            <h4>Synonyms</h4>
            <p>{synonyms[0]}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

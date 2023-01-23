export default function Meaning({ partOfSpeech, definitions, synonyms }) {
  return (
    <div>
      <h2 className="mb-8 font-bold italic">{partOfSpeech}</h2>
      <h3 className="mb-4">Meaning</h3>
      <ul>
        {definitions.map(({ definition, example }) => (
          <>
            <li key={`${definition}${Math.random()}`}>{definition}</li>
            {example ? <q>{example}</q> : null}
          </>
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

export default function Meaning({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="mb-8">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-bold italic text-gray-dark">{partOfSpeech}</h2>
        <hr className="w-full text-gray-light" />
      </div>
      <h3 className="mb-4 text-gray-lighter">Meaning</h3>
      <ul className="ml-9 list-inside list-disc">
        {definitions.map(({ definition, example }) => (
          <li
            key={`${definition}${Math.random()}`}
            className="mb-3 marker:text-purple"
            style={{ textIndent: "-2.3rem" }}
          >
            <span className="ml-4 text-gray-dark">
              {definition}
              {example ? <q>{example}</q> : null}
            </span>
          </li>
        ))}
      </ul>
      <div>
        {partOfSpeech === "noun" ? (
          <div className="flex gap-6">
            <h4 className="text-gray-lighter">Synonyms</h4>
            <p className="font-bold text-purple">{synonyms[0]}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Meaning({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="mb-8">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-bold italic text-gray-dark dark:text-white">
          {partOfSpeech}
        </h2>
        <hr className="w-full text-gray-light dark:text-gray" />
      </div>
      <h3 className="mb-4 text-gray-lighter">Meaning</h3>
      <ul className="ml-9 list-inside list-disc">
        {definitions.map(({ definition, example }) => (
          <li
            key={`${definition}${Math.random()}`}
            className="mb-3 marker:text-purple"
            style={{ textIndent: "-2.3rem" }}
          >
            <span className="ml-4 text-gray-dark dark:text-white">
              {definition}
            </span>
            {example ? (
              <p
                className="mt-3 ml-1 w-full text-gray-lighter"
                style={{ textIndent: "0" }}
              >
                "{example}"
              </p>
            ) : null}
          </li>
        ))}
      </ul>
      <div>
        {partOfSpeech === "noun" && synonyms.length > 0 ? (
          <div className="flex gap-6">
            <h4 className="text-gray-lighter">Synonyms</h4>
            <p className="font-bold text-purple">{synonyms[0]}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Meaning({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="mb-8 md:mb-12">
      <div className="mb-8 flex items-center gap-4 md:mb-10">
        <h2 className="text-lg font-bold italic text-gray-dark dark:text-white md:text-2xl">
          {partOfSpeech}
        </h2>
        <hr className="w-full text-gray-light dark:text-gray" />
      </div>
      <h3 className="mb-4 text-gray-lighter">Meaning</h3>
      <ul className="ml-9 list-inside list-disc md:ml-14 md:mb-10">
        {definitions.map(({ definition, example }) => (
          <li
            key={`${definition}${Math.random()}`}
            className="mb-3 marker:text-purple"
            style={{ textIndent: "-2.3rem" }}
          >
            <span className="ml-4 text-sm text-gray-dark dark:text-white md:text-lg">
              {definition}
            </span>
            {example ? (
              <p
                className="mt-3 ml-1 w-full text-sm text-gray-lighter md:text-lg"
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
            <h4 className="text-gray-lighter md:text-xl">Synonyms</h4>
            <p className="font-bold text-purple md:text-xl">{synonyms[0]}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

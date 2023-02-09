export default function NoResults({
  firstPageLoad,
}: {
  firstPageLoad: boolean;
}) {
  return (
    <>
      {firstPageLoad ? null : (
        <div>
          <div className="mb-11 mt-20 text-center text-6xl md:mt-32">😕</div>
          <h2 className="mb-6 text-center text-xl font-bold dark:text-white">
            No Definitions Found
          </h2>
          <p className="text-center text-gray-lighter md:text-lg">
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      )}
    </>
  );
}

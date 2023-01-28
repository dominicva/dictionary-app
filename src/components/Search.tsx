import searchIcon from "../assets/images/icon-search.svg";

export default function Search({ inputError, onSubmit }) {
  return (
    <form
      className="mt-6 mb-7 flex flex-col md:mt-12 md:mb-11"
      onSubmit={onSubmit}
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for any word"
          className="ring-transparent h-12 w-full rounded-2xl border-none bg-gray-lightest px-4 focus:ring-2 focus:ring-purple  active:shadow-none dark:bg-gray-darker dark:text-white md:h-16 md:px-6"
        />
        <button type="submit" className="absolute top-4 right-4 md:top-6">
          <img src={searchIcon} alt="Search" />
        </button>
        {inputError ? (
          <span className="ml-1 mt-2 inline-block text-crimson md:text-xl">
            Whoops, can’t be empty…
          </span>
        ) : null}
      </div>
    </form>
  );
}

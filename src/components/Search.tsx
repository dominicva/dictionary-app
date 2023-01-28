import searchIcon from "../assets/images/icon-search.svg";

export default function Search({ onSubmit }) {
  return (
    <form className="mt-6 mb-7 flex md:mt-12 md:mb-11" onSubmit={onSubmit}>
      <div className="relative w-full">
        <input
          required
          type="text"
          placeholder="Search for any word"
          className="ring-transparent h-12 w-full rounded-2xl border-none bg-gray-lightest focus:ring-2 focus:ring-purple active:shadow-none  dark:bg-gray-darker dark:text-white md:h-16 md:px-6"
        />
        <button type="submit" className="absolute right-4 top-1/3">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </form>
  );
}

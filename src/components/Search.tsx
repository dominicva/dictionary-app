import searchIcon from "../assets/images/icon-search.svg";

export default function Search({ onSubmit }) {
  return (
    <form className="mt-6 mb-7 flex" onSubmit={onSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for any word"
          className="h-12 w-full rounded-2xl border-none bg-gray-lightest"
        />
        <button type="submit" className="absolute right-4 top-1/3">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </form>
  );
}

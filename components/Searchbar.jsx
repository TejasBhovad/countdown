import Search from "@/components/logos/Search.jsx";

const Searchbar = ({ setSearchTerm }) => {
  // change value of search term
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="text-md search-container border-radius 2px flex bg-background items-center gap-2 rounded-xl px-3">
      <Search />
      <input
        type="text"
        id="search-input"
        placeholder="Search counts..."
        onChange={handleSearch}
        className="bg-transparent w-36 border-transparent focus:border-transparent focus:ring-0 outline-none text-secondary"
      />
      <button id="search-button"></button>
    </div>
  );
};

export default Searchbar;

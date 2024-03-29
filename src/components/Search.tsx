import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <section className="mx-4 text-white text-sm">
      <div className="search-container">
        <CiSearch className="search-icon font-semibold" />
        <input
          type="text"
          className="pl-12 bg-dark-blue w-full p-2 outline-none shadow-md rounded-sm"
          placeholder="Search for a country..."
        />
      </div>
      <div className="mt-6">
        <select className="bg-dark-blue outline-none p-3 rounded-sm shadow-lg">
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default Search
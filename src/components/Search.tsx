import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { SearchProps } from "../index";


const Search: React.FC<SearchProps> = ({ onSearch, onRegionFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Call onSearch prop with search term
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
    onRegionFilter(event.target.value); // Call onRegionFilter prop with region
  };

  return (
    <section className="mx-4 md:mx-12 text-white text-sm md:flex md:justify-between md:items-center">
      <div className="search-container">
        <CiSearch className="search-icon font-semibold" />
        <input
          type="text"
          className="pl-12 bg-dark-blue w-full md:w-96 p-2 outline-none shadow-md rounded-sm"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mt-6 md:mt-0">
        <select
          className="bg-dark-blue outline-none p-3 rounded-sm shadow-lg cursor-pointer text-sm"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by region</option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Search;

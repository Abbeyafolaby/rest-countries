import useSWR from 'swr'
import { Country } from '../index'
import CountryData from './Country'
import { useState } from 'react';
import Search from './Search';
import Loading from './Loading';

const fetcher: (url: string) => Promise<Country[]> = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const Countries = () => {

    const { data, error, isLoading } = useSWR<Country[], Error>('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,tld,languages,subregion,currencies', fetcher);

    const [filteredData, setFilteredData] = useState(data || []);

    const handleSearch = (searchTerm: string) => {
        // Filter data by name
        const filtered = data?.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered || []);
      };
    
      const handleRegionFilter = (region: string) => {
        // Filter data by region
        const filtered = data?.filter((country) => country.region === region);
        setFilteredData(filtered || []);
      };
    

        console.log(data);
    if (isLoading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;
    


  return (
    <>
        <Search 
            onSearch={handleSearch}
            onRegionFilter={handleRegionFilter}
        />
        <div className='pt-8 mx-10 text-white md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-12 xl:gap-16'>
        {filteredData.length > 0 ? ( 
        filteredData?.map((country) => (
          <CountryData
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            alt={country.flags.alt}
          />
        ))
      ) : (
        data?.map((country) => (
          <CountryData
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            alt={country.flags.alt}
          />
        ))
      )}
        </div>
    </>
  )
}

export default Countries
import useSWR from 'swr'
import { Country } from '../index'
import CountryData from './Country'

const fetcher: (url: string) => Promise<Country[]> = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const Countries = () => {

    const { data, error, isLoading } = useSWR<Country[], Error>('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,tld,languages,subregion,currencies', fetcher);

        console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    


  return (
    <div className='pt-8 mx-10 text-white md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-12 xl:gap-16'>
        {data?.map((country) => (
            <CountryData 
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                alt={country.flags.alt}
            />
        ))}
    </div>
  )
}

export default Countries
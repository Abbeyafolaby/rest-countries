import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import { IoArrowBack } from "react-icons/io5";
import { CountryData} from "../index";




const CountryDetails = () => {
  const { name } = useParams(); // Extract country name from route parameters

  // Handle potential errors (assuming you have a state management library like Redux or Context)
  const [countryData, setCountryData] = useState<CountryData | null>(null); // Optional: State to store data
  const [isLoading, setIsLoading] = useState(true); // Optional: State for loading indicator
  const [error, setError] = useState(null); // Optional: State for error messages

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const apiUrl = `https://restcountries.com/v3.1/name/${name}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }
        const data = await response.json();
        setCountryData(data[0]); // Assuming the API returns an array of one country
      } catch (err) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [error, name]); // Dependency array to trigger fetch on name change

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!countryData) return <div>Country not found</div>; // Handle case where country is not found

  // Use countryData here for rendering (assuming it's an object)
  const {
    flags, 
    population, 
    region, 
    capital, 
    languages: countryLanguages, 
    currencies: countryCurrency,
    subregion,
    borders: countryBorders,
    tld
} = countryData;

console.log(countryData.name);

const languageNames = Object.values(countryLanguages);
const joinedLanguageNames = languageNames.join(", ");

const nativeNames = countryData.name.nativeName;
let selectedNativeName = ''; // Initialize selected native name

// Check if the native names object exists and pick one of the common names
if (nativeNames) {
  const nativeNameKeys = Object.keys(nativeNames);
  // Pick any native name (in this case, the first one)
  selectedNativeName = nativeNames[nativeNameKeys[0]].common;
}

const currencyCode = Object.keys(countryCurrency)[0];
const currencyName = countryCurrency[currencyCode].name;


  return (
    <section className="text-white p-6 md:p-12">
        <div className="mb-8">
          <Link to='/'>
            <button 
              className="flex justify-center items-center py-2 px-4 rounded-md shadow-md bg-dark-blue text-sm">
                <IoArrowBack className="mr-3"/> Back
            </button>
          </Link>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-20">
          <div className="mb-6 md:mb-0">
            <img 
              src={(flags as { png: string; alt: string }).png} 
              alt={(flags as { png: string; alt: string }).alt}
              className="w-full"
              />
          </div>
          <div className="">
            <p className="font-bold text-lg mb-5">{name}</p>
            <div className="grid gap-y-4 md:grid-cols-2 text-sm">
                <div className="space-y-2">
                  <p>Native Name: {selectedNativeName}</p>
                  <p>Population: {population.toLocaleString('en-US')}</p>
                  <p>Region: {region}</p>
                  <p>Sub Region: {subregion}</p>
                  <p>Capital: {capital}</p>
                </div>

                <div className="space-y-2">
                  <p>Top Level Domain: {tld}</p>
                  <p>Curriencies: {currencyName}</p> 
                  <p>Languages: {joinedLanguageNames}</p>
                </div>
              </div>

            <div className="mt-8">
            {countryBorders && countryBorders.length > 0 ? (
                <div className="md:flex  md:items-center md:gap-x-4">
                  <p className="text-sm mb-2 md:mb-0">Border Countries: </p>
                  <div className="space-x-2">
                    {countryBorders.map(border => (
                      <button 
                        key={border} 
                        className="bg-dark-blue hover:bg-very-dark-blue text-white text-xs py-1 px-2 rounded-md shadow-md ease-in-out"
                      >
                        {border}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
    </section>
  );
}


export default CountryDetails
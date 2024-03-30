import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 


const CountryDetails = () => {
  const { name } = useParams(); // Extract country name from route parameters

  // Handle potential errors (assuming you have a state management library like Redux or Context)
  const [countryData, setCountryData] = useState(null); // Optional: State to store data
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
    // languages, 
    // currencies,
    subregion,
    // borders,
    tld
} = countryData;

// console.log(countryData.name);


  return (
    <div className="text-white">
        <img src={flags.png} alt={flags.alt} />
        <p>{name}</p>
        <p>Native Name: </p>
        <p>Population: {population.toLocaleString('en-US')}</p>
        <p>region: {region}</p>
        <p>Sub Region: {subregion}</p>
        <p>Capital: {capital}</p>

        <p>Top Level Domain: {tld}</p>
        {/* <p>Curriencies: {currencies.EUR.name}</p> */}
        {/* <p>Languages: {languages}</p> */}

    </div>
  );
}

const CountryLoader = async ({ params }) => {
  // This function isn't strictly necessary if you're directly fetching data in CountryDetails
  // Consider removing it and fetching data within the component itself.
  const apiUrl = `https://restcountries.com/v3.1/name/${params.name}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export { CountryDetails as default, CountryLoader };
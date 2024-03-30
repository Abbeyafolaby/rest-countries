import { Link } from "react-router-dom";
import { CountryProps } from "../index";

const Country: React.FC<CountryProps> = ({
  name,
  flag,
  population,
  region,
  capital,
  alt
}) => {
  return (
    <Link to={`/${name}`}>
    <div key={name} className='rounded-md space-y-4 bg-dark-blue shadow-md mb-8'>
      <div>
        <img src={flag} alt={alt} className='w-full h-40 rounded-t-md ' />
      </div>
      <div className='px-6 pb-4'>
        <p className='font-semibold text-lg mb-4'>{name}</p>
        <p className='text-sm mb-1'>
          Population: {population.toLocaleString('en-US')}
        </p>
        <p className='text-sm mb-1'>Region: {region}</p>
        <p className='text-sm mb-1'>Capital: {capital}</p>
      </div>
    </div>
    </Link>
  );
};

export default Country;

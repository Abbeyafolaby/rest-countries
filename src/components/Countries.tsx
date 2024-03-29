import useSWR from 'swr'

interface Country {
    id: number;
    name: Name;
}

interface Name {
    common:     string;
    official:   string;
}


const fetcher: (url: string) => Promise<Country[]> = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};



const Countries = () => {

    const { data, error, isLoading } = useSWR<Country[], Error>('https://restcountries.com/v3.1/all?fields=name', fetcher);

        console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    


  return (
    <div>
        {data?.map((country) => (
        <div key={country.id}>
        <div >{country.name.common}</div>
        </div>
        ))}
    </div>
  )
}

export default Countries
// import useSWR from 'swr';

// interface Item {
//     id: number;
//     title: string;
//     price: string;
//     category: string;
//     description: string;
//     image: string;
// }

// const fetcher: (url: string) => Promise<Item[]> = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// };

// const Product = () => {
//     const { data, error, isLoading } = useSWR<Item[], Error>('https://fakestoreapi.com/products', fetcher);
    
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
    
//     console.log(data);

//     return (
//         <div className='grid grid-cols-6'>
//             {data?.map((item) => (
//                 <div key={item.id}>
//                 <div >{item.title}</div>
//                 <img src={item.image} alt="item image" width={150} height={150}/>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Product;

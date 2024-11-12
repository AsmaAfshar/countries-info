 

 interface CountryInfoProps {
    name:string;
    capital:string;
    population:number;
}
const CountryInfo = ({ name, capital, population}:CountryInfoProps)=> {
    return(
    <div className="border p-4 rounded-lg shadow-md bg-gray-600">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-lg"><strong>Capital:</strong> {capital}</p>
        <p className="text-lg"><strong>Population:</strong> {population}</p>
    </div>
    );
}
export default CountryInfo;
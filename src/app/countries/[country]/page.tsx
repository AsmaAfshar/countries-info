import CountryInfo from "@/app/components/CountryInfo";
import { CountriesData } from "@/app/data/CountriesData";
interface CountryPageProps {
    params: {country:string};
}

export default function CountryPage ({ params }: CountryPageProps) {
    const countryName = params.country;
    const country = CountriesData[countryName as keyof typeof CountriesData];

    if(!country){
        return <div>Country not found</div>;
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="max-w-lg w-full bg-gray-400 shadow-lg p-8 rounded-lg text-green-950" >
            <h1 className="font-bold text-3xl underline text-center">{countryName}</h1>
            <CountryInfo
            name = {country.name}
            capital = {country.capital}
            population = {country.population}
            />
            </div>
            </div>
       
    );
}
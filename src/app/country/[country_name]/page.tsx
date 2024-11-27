export default function CountryName({params}:any) {

    const countries:{
        name: string,
        population: number,
        capital: string
    }[] = [{
        name: "Pakistan",
        population: 123000000000,
        capital: "Islamabad"
    }, 
    {
        name: "India",
        population: 1430000000,
        capital: "New Delhi"
    },
    {
        name: "China",
        population: 1426000000,
        capital: "Beijing"
    },
    {
        name: "Japan",
        population: 125000000,
        capital: "Tokyo"
    },
    {
        name: "Germany",
        population: 84000000,
        capital: "Berlin"
    },
];

 function searchCountry(country_url:string){
    return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase())
  }

  let result = searchCountry(params.country_name);

  return (
    <div>
        {
            result? (
                <>
                <h1>Country Name: {result.name}</h1>
                <h1>Country Capital: {result.capital}</h1>
                <h1>Country Population: {result.population}</h1>
                </>
            ) : (
                <h1>Country Not Found</h1>
            )
        }
      
    </div>
  );
}
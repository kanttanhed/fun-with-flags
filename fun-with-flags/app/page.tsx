import { Footer, Header, Card } from "./components";

const countries = [
  { id: 1, country: "Brazil", capital: "Brasília", region: "South America", population: 213993437 },
  { id: 2, country: "United States", capital: "Washington, D.C.", region: "North America", population: 331893745 },
  { id: 3, country: "India", capital: "New Delhi", region: "Asia", population: 1427647786 },
  { id: 4, country: "China", capital: "Beijing", region: "Asia", population: 1444216107 },
  { id: 5, country: "Germany", capital: "Berlin", region: "Europe", population: 83900471 },
  { id: 6, country: "Nigeria", capital: "Abuja", region: "Africa", population: 223804632 },
  { id: 7, country: "Australia", capital: "Canberra", region: "Oceania", population: 26199356 },
  { id: 8, country: "Canada", capital: "Ottawa", region: "North America", population: 38454327 },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Card
            key={country.id}
            country={country.country}
            capital={country.capital}
            region={country.region}
            population={country.population}
          />
        ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

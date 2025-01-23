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
        <Card
          id={countries[0].id}
          country={countries[0].country}
          capital={countries[0].capital}
          region={countries[0].region}
          population={countries[0].population}
        />
        <Card
          id={countries[1].id}
          country={countries[1].country}
          capital={countries[1].capital}
          region={countries[1].region}
          population={countries[1].population}
        />
      </main>
      <Footer />
    </>
  );
}

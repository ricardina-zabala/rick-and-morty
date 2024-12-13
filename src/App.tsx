import { useEffect, useState } from 'react';
import './index.css';
import './App.css'

interface Personage {
  id: number;
  name: string;
  image: string;
  species: string
}

function App() {

  const [personages, setPersonages] = useState<Personage[]>([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error('');
        }
        return response.json();
      })
      .then((data) => {
        setPersonages(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="app-container bg-gradient-to-r from-darkGray via-black to-darkGray min-h-screen">
        <h1 className="text-center text-4xl font-extrabold font-rick mb-8 text-portalGreen">
          Rick y Morty Personajes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
          {personages.map((p, i) => (
            <div
              key={i}
              className="card border hover:animate-pulseSmooth border-electricBlue rounded-lg p-4 bg-darkGray shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                className="w-full rounded-lg mb-4 object-cover h-40 sm:h-48"
                src={p.image}
                alt={p.name}
              />
              <h2 className="font-rick text-xl font-bold hover:text-galacticPurple text-portalGreen transition-colors duration-200">
                {p.name}
              </h2>
              <div className='flex flex-wrap items-center justify-between'>
                <p
                  className={`text-sm inline-block p-2 rounded-lg ${p.species === 'Alien'
                      ? 'bg-alienGreen text-darkGray'
                      : 'bg-electricBlue text-softWhite'
                    }`}
                >
                  {p.species}
                </p>
                <p className='bg-rickBlue text-sm inline-block p-2 rounded-lg text-softWhite'>
                  Ver mas
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

}

export default App

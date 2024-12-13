import { useEffect, useState } from 'react';
import './index.css';
import './App.css'

interface Personage {
  id: number;
  name: string;
  image:string;
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
       <div className="app-container">
      <h1>Rick y Morty Personajes</h1>
      <div className="grid grid-cols-3 gap-6 p-6">
        {personages.map((p, i) => (
          <div key={i} className="border border-gray-200 rounded-lg shadow-lg p-4 bg-white">
            <img src={p.image} alt={p.name} />
            <h2 className='text-xl font-bold text-gray-800'>{p.name}</h2>
            <p className='text-sm text-gray-500'>{p.species}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App

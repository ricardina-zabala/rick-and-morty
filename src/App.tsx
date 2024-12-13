import { useEffect, useState } from 'react';
import './App.css'

interface Personage {
  id: number;
  name: string;
  image:string;
  species: string
}

function App() {

  const [personages, setPersonages] = useState<Personage[]>([])

  useEffect(() =>{
    fetch("https://rickandmortyapi.com/api/character").then((response)=>{
      if (!response) {
        throw new Error()
      }
      return response.json()
    })
    .then((data) =>{
      setPersonages(data.results)
    })
    .catch((error) =>{
      console.log(error);
      
    })
  })

  return (
    <>
       <div className="app-container">
      <h1>Rick y Morty Personajes</h1>
      <div className="cards-container">
        {personages.map((p, i) => (
          <div key={i} className="card">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.species}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App

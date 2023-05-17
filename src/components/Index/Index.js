import { useState, useEffect } from 'react';
import axios from 'axios';
import Wine from './Wine';
import './stylesheets/Wine.css';

const Index = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const getWines = async () => {
      const res = await axios.get('http://localhost:3001/api/wines')
      setWines(res.data);
    }
    getWines()
  }, [])
  return (
    <>
      <div className='wine-body'>
        <div className='wine-title'>
          <p>Wines</p>
        </div>
        <div className='wine-contents'>
          {wines.map((wine) => {
            return <Wine wine={wine} />
          })}
        </div>
      </div>
    </>
  )
}

export default Index;
import { useState } from 'react';
import Wine from './Wine';
import './stylesheets/Wine.css';

const Wines = () => {
  const [wines, setWines] = useState([
    {
      name: 'Bread and Butter',
      kind: '白 シャルドネ',
      country: 'アメリカ',
      maker: 'カルフォルニア',
      score: '10',
      imagePath: './sample.jpg'
    },
    {
      name: 'Bread and Butter',
      kind: '白 シャルドネ',
      country: 'アメリカ',
      maker: 'カルフォルニア',
      score: '10',
      imagePath: './sample.jpg'
    },
    {
      name: 'Bread and Butter',
      kind: '白 シャルドネ',
      country: 'アメリカ',
      maker: 'カルフォルニア',
      score: '10',
      imagePath: './sample.jpg'
    },
    {
      name: 'Bread and Butter',
      kind: '白 シャルドネ',
      country: 'アメリカ',
      maker: 'カルフォルニア',
      score: '10',
      imagePath: './sample.jpg'
    },
    {
      name: 'Bread and Butter',
      kind: '白 シャルドネ',
      country: 'アメリカ',
      maker: 'カルフォルニア',
      score: '10',
      imagePath: './sample.jpg'
    },
    {
      name: 'Bread and Butter',
      kind: '白 シャルドネ',
      country: 'アメリカ',
      maker: 'カルフォルニア',
      score: '10',
      imagePath: './sample.jpg'
    },
  ]
  );

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

export default Wines;
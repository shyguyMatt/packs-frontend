import { React, useEffect, useState } from 'react';
import Card from '../../componants/card';

import './style.scss'

export default function Pack() {
  const [cards, setCards] = useState('loading')
  let iterator = 1000

  useEffect(() => {
    getCards()
    // setCards([205, 213, 215, 207, 209, 216])
  }, []);

  async function getCards() {
    let url = "http://10.0.0.75:1300/open_pack"
    let response = await fetch(url);
    setCards(await response.json());
  }

  if (cards === 'loading') {
    return(<>Loading...</>)
  }

  return (
    <div>
      <div id='cardSpace'>
        {cards.map((card) => {
          iterator--
          return(<Card id={{card, iterator}}/>)
        })}        
        <button style={{position: 'absolute', top: '50%', left: '50%'}} onClick={() => window.location.href = '/'}>Return Home</button>
      </div>
    </div>
  )
}
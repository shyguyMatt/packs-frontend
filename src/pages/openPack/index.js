import { React, useState, useEffect } from 'react';

import './style.scss'
import { useLocation } from 'react-router-dom';
import Card from '../../componants/card';

export default function OpenPack() {
  const [ cards, setCards ] = useState('loading')

  const location = useLocation()

  let iterator = 1000

  useEffect(() => {
    getCards()
  }, []);

  async function getCards() {
    let url = 'https://tcg-api.shyguymatt.com/packs/open_pack'
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        filename: location.state.key
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
    setCards(await response.json())
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
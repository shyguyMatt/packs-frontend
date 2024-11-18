import { React, useEffect, useState } from 'react';

import './style.scss'

export default function Card(props) {
  const [cardInfo, setCardInfo ] = useState('loading')
  let id = props.id.card
  let z = props.id.iterator


  useEffect(() => {
    getCardInfo()
  }, []);

  async function getCardInfo() {
    let url = `https://api.lorcast.com/v0/cards/1/${id}`
    let response = await fetch(url);
    setCardInfo(await response.json());
  }

  function swipe(e) {
    e.target.parentElement.classList.toggle('swiped')
  }

  if (cardInfo === 'loading') {
    return(<>Loading...</>)
  }
  console.log(cardInfo)


  return (
    <div className='card' style={{zIndex: z}} onClick={swipe}>
      <img id='cardImg' src={cardInfo.image_uris.digital.normal}/>
    </div>
  )
}
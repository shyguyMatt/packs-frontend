import { React, useEffect, useState } from 'react';
import Card from '../../componants/card';

import './style.scss'
import { useNavigate } from 'react-router-dom';

export default function Pack() {
  const [packs, setPacks] = useState('loading')

  const navigate = useNavigate();

  useEffect(() => {
    getPacks()
  }, []);

  async function getPacks() {
    let url = "https://tcg-api.shyguymatt.com/packs"
    let response = await fetch(url);
    setPacks(await response.json());
  }

  function openPack(e) {
    // console.log(e.target.value)
    navigate('/open-pack', { state: { key: e.target.value } })
  }

  if (packs === 'loading') {
    return(<>Loading...</>)
  }

  return (
    <div>
      <div>
        {packs.map((pack) => {
          return(
            <button onClick={openPack} value={pack.filename}>{pack.name}</button>
          )
        })}        
      </div>
    </div>
  )
}
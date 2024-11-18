import { React } from "react";
import { useNavigate } from "react-router-dom";

import './style.scss'

export default function Navigation() {

  function toggleNav() {
    document.getElementById('top-div').classList.toggle('translate-up');
    document.getElementById('bottom-div').classList.toggle('translate-down')
  }

  const navigate = useNavigate()

  return(
    <>
      <div id='top-div'>
        <h1>Header</h1>
      </div>

      <div id='bottom-div'>
        <button></button>
        <button onClick={() => {
          navigate('/pack');
          toggleNav()
          }}></button>
        <button></button>
      </div>
    </>
  )
}
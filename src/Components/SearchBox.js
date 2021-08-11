import { Link } from 'react-router-dom'
import logo from '../Img/logo.png'
import bola from '../Img/bola.gif'

export default function SearchBox(filter) {
  return(
    <div className="app__list__searchbox">
      <div className="app__list__searchbox__container">
        <img className="app__list__searchbox__container__bola"src={bola }alt="Pokémon"></img>
        <img  className="app__list__searchbox__container__logo"src={logo} alt="Pokémon"></img>
        <input 
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
        
        <button>
          <Link to="/about">Sobre</Link>
        </button>
      </div>
      
    </div>
  )
}
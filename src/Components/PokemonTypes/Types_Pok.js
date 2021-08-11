import React from 'react'
import { useState, useEffect} from 'react';
import Card from '../Card';



export default function TypesPok(props) {

  const idDoTipo = props.match.params.id  
  const [type, setType] = useState({})
  const [loading, setLoading] = useState(true)

  const getData = ()=> {
    fetch('https://pokeapi.co/api/v2/type/' + idDoTipo)
    .then( res => res.json() )
    .then( (result) => {
      setType(result)
      setLoading(false)
  })}

  useEffect( ()=> {
    getData();
  }, []);

 console.log(idDoTipo)
  if(loading){
    return <div><h1>Loading</h1></div>       
  }
  
  return(
    <div className='damage'>
      
        <div className='damage__Pok'>
            <div className='damage__Pok__list'>
              <h1>Recebe dano dobrado de pokemons do tipo:</h1>
              {type.damage_relations.double_damage_from.map((item) => (
                <h2 id="damageButtonI" className={'app__list__card__category__button--' + item.name}>{item.name}</h2>
              ))} 
            </div>
            <div className='damage__Pok__list__causa'>
              <h1>Causa dano dobrado em pokemons do tipo:</h1>
              {type.damage_relations.double_damage_to.map((item) => (
                <h2 id="damageButtonII" className={'app__list__card__category__button--' + item.name}>{item.name}</h2>
              ))} 
            </div>
          </div>
          <div className='damage__Pok__list__Card'>
            {type.pokemon.map((item) => (
              <Card key={item.pokemon.name} info={item.pokemon}></Card>
            ))}
          </div>
        </div>
    
  )} 

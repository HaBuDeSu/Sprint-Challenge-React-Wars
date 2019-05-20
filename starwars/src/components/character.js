import React from 'react';
import './StarWars.css';

function Character(props) {
  return (
    <div className={`character-box ${props.gender}`}>
      <p className='name'>{props.name}</p>
      {/*<p>Species: {props.species.name}</p>
      <p>Home World: {props.homeworld}</p>*/}
      <p className='birth-year'>Birth Year: {props.birth_year}</p>
      <p className='gender'>Gender: {props.gender}</p>
      <p className='eye-color'>Eye Color: {props.eye_color}</p>
      <p className='hair-color'>Hair Color: {props.hair_color}</p>
    </div>
  )
}

export default Character;

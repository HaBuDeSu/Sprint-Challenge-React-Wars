import React from 'react';
import './StarWars.css';

function Character(props) {
  return (
    <div className='character-box'>
      <p>Name: {props.name}</p>
      // <p>Species: {props.species.name}</p>
      // <p>Home World: {props.homeworld}</p>
      <p>Birth Year: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Hair Color: {props.hair_color}</p>
    </div>
  )
}

export default Character;

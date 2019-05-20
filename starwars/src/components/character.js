import React from 'react';
import './StarWars.css';

function Character(props) {
  return (
    <div>
      {props.name}
      {props.species}
      {props.homeworld}
      {props.birth_year}
      {props.gender}
      {props.eye_color}
      {props.hair_color}
    </div>
  )
}

export default Character;

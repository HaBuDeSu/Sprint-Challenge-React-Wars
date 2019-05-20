import React from 'react';
import './StarWars.css';
import Character from './Character';


function CharacterList(props) {
  return (
    <div className='character-list'>
      {props.starwarsChars.map(character => (
        <Character
          name = {character.name}
          species = {character.species[0]}
          homeworld = {character.homeworld}
          birth_year = {character.birth_year}
          gender = {character.gender}
          eye_color = {character.eye_color}
          hair_color = {character.hair_color}
        />
      ))}
    </div>
  )
}

export default CharacterList;

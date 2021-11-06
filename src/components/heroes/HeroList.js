import React from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { HeroCardAlternative } from './HeroCardAlternative';
// import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {
        heroes.map(hero =>
          <HeroCardAlternative 
            key={hero.id} 
            {...hero}
          />
        )
      }
    </div>
  )
}

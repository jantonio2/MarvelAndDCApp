import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCardAlternative } from './HeroCardAlternative'

// import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {

  const heroes = getHeroByPublisher(publisher)

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
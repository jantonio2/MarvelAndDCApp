import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCardAlternative } from './HeroCardAlternative'

// import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {

  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
  // const heroes = getHeroByPublisher(publisher)

  return (
    <div className="row row-cols-1 row-cols-md-3 animate__animated animate__fadeIn">
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

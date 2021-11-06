import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {

  const {heroId} = useParams()

  const hero = getHeroById(heroId)

  if(!hero){
    return <Redirect to="/" />
  }

  const {id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} = hero

  return (
    <div>
      <h1>Hero Screen</h1>
    </div>
  )
}

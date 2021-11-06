import React from 'react'
import { heroes } from './../../data/heroes'
import { HeroCard } from './../heroes/HeroCard'
import { useForm } from './../../hooks/useForm'

export const SearchScreen = () => {

  const heroesFiltered = heroes

  const [formValues, handleInputChange] = useForm({
    searchText: ''
  })

  const {searchText} = formValues

  const handleSearch = (e) => {
    e.preventDefault()

    console.log(searchText)
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form className="d-grid gap-3" onSubmit={handleSearch}>
            <input 
              type="text"
              name="searchText"
              autoComplete="off"
              placeholder="Find your hero"
              className="form-contorl"
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            heroesFiltered.map(hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

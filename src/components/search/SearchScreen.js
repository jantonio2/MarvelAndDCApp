import React, { useMemo } from 'react'
import { HeroCard } from './../heroes/HeroCard'
import { useForm } from './../../hooks/useForm'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroByName } from './../../selectors/getHeroByName'

export const SearchScreen = () => {
  
  let history = useHistory()
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)
  const [formValues, handleInputChange] = useForm({
    searchText: q
  })
  const {searchText} = formValues
  // const heroesFiltered = getHeroByName(searchText)
  const heroesFiltered = useMemo(() => getHeroByName(q), [q])
  
  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
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
              value={searchText}
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

          { (q === '' /*|| (q !== '' && heroesFiltered.length === 0)*/)
            && <div className="alert alert-info">
              Search a hero
            </div>
          }
          { (q !== '' && heroesFiltered.length === 0)
            && <div className="alert alert-danger">
              There isn't a hero with {q}
            </div>
          }
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

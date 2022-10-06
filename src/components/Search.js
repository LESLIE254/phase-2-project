import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"

function Search({onSearching}) {
    const [search, setSearch] = useState("")
    function handleChange(e) {
        setSearch(e.target.value)
        onSearching(search)
    }
    function click(e) {
        e.preventDefault()
        console.log('clicked')
    }
  return (
        <form className='search'>
        <input 
        type="text"
        name="search"
        placeholder= "search"
        value={search}
        onChange={handleChange}
        />
        <button onClick={click}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
  )
}

export default Search
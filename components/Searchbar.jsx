import React from 'react'

const Searchbar = () => {
  return (
    <div class="search-container border-radius 2px display:flex">
    <input type="text" id="search-input" placeholder="Search counts..."/>
    <button id="search-button text-align:Right"><img src="discord.png" alt="search logo" /></button>
</div>

  )
}

export default Searchbar

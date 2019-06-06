//this compoenent is for the searchbox.

import React from 'react';

//is passed the searchfield and searchchange properties which are destructured. The input onChange event is triggered when a character is enteredd. When this happens the "searchChange" property is called which is assigned to the "onSearchChange" function in App.js
const SearchBox = ({searchfield, searchChange}) => {
  return(
    <div className="pa2">
      <input
        className='pa3 ba b--light-purple bg-lightest-blue br3'
        type='search'
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;

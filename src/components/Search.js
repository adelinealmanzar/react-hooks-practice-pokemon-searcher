import React from "react";

function Search({ updatetPokemonsBasedOnSearchFilter }) {

  function sendInputValueToParent(searchValue) {
    updatetPokemonsBasedOnSearchFilter(searchValue)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => sendInputValueToParent(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

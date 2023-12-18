import React, { useState } from "react";

function Search({setListings,handleSearchListings}) {
  const [search,setSearch] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setSearch(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchListings(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

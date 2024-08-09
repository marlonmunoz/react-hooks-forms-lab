import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {

  const [newSearch, setNewSearch] = useState("")

  function handleChange(event){
   console.log(event.target.value)
    

  }
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" name="search" placeholder="Search..." value={search} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm(props) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()

    props.onItemFormSubmit(newItem)
  }

  const newItem = {
    id: uuid(),
    name: formData.name,
    category: formData.category
  }

  

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" value={formData.name} />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category" value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

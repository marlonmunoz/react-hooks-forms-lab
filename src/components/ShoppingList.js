import React, { useState, useTransition } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value)

  }

  function onItemFormSubmit(newItem) {
    const updatedItems = [...items, newItem]
    setItems(updatedItems)
    // setItems()

  }
  // const newItem = {
  //   id: uuid(),
  //   name: formData.name,
  //   category: formData.category
  // }

  const itemsToDisplay = items.filter((item) => {
    // if (selectedCategory === "All") return true;

    // return item.category === selectedCategory;
    if(search === "") {
      return true
    }
    return item.name.includes(search)
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange}  onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

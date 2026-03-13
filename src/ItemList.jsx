import * as React from 'react'
 
function ItemList({ items, onRemoveItem }) {

  function itemClicked(e) {
    onRemoveItem(e.target.textContent);
  }


  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={itemClicked}>{item}</li>
      ))}
    </ul>
  )
}
 
export default ItemList
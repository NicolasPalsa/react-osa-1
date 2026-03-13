import * as React from "react"
import { useState } from "react"
import Form from "./Form"
import ItemList from "./ItemList"

function ShoppingList() {
    const [items, setItems] = useState(['Pencil', 'Notes', 'Eraser'])

    
    function addItem(newItem) {
        if ((items.filter((item) => item.toLowerCase() === newItem.toLowerCase())).length === 0 && newItem.length > 0) {
            setItems([...items, newItem])
        }
        else {
            console.log('item already added');
        }
    }

    function removeItem(itemToRemove) {
        setItems(items.filter((item) => item !== itemToRemove))
    }


    return (
        <div>
        <Form onAddItem={addItem} />
        <ItemList items={items} onRemoveItem={removeItem} />
        </div>
    )
}

export default ShoppingList
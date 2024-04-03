import React, { useState } from "react"
import TASK from "../TASK/TASK";
export const itemContext = React.createContext();

const localStorageListKey = 'baxlog'
function calcInitialState() {
    try {
        let bax = JSON.parse(localStorage.getItem('baxlog'));
        if (!bax || typeof (bax) !== 'object') throw new Error("Backlog is supposed to be object but instead: ", typeof (bax));
        for (const key in bax) {
            bax[key] = new TASK(bax[key]);
        }
        return bax
    }
    catch (err) {
        // console.log(err, 'no initial backlog');
        return {}
    }
}

export default function ItemListContext({ children }) {
    const [items, setItems] = useState(calcInitialState());

    const updateItem = (itemID, newVal) => {
        const newBacklog = { ...items }//this syntax supposedly makes a shallow copy and not a diferent mutable object, but it still works. More safe but slower would be: Object.fromEntries(Object.entries(items))
        newBacklog[itemID] = newVal;
        localStorage.setItem(localStorageListKey, JSON.stringify(newBacklog));
        setItems(newBacklog);
    }
    const addItem = (newVal) => {
        let itemID = Date.now() % 10000;
        while (Object.keys(items).includes(itemID.toString())) itemID++;
        updateItem(itemID, newVal);
    }
    const deleteItem = (itemID) => {
        const newBacklog = Object.fromEntries(Object.entries(items).filter(([id,]) => { return (id !== itemID) }));
        localStorage.setItem(localStorageListKey, JSON.stringify(newBacklog));
        setItems(newBacklog);
    }
    return <itemContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
        {children}
    </itemContext.Provider>
}
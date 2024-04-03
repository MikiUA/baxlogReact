import React, { useMemo, useState, useContext } from "react"
import { itemContext } from "./ItemListContext";
import { availibleTags } from "../TASK/availibleTagOptions";
const allTags = ["All", ...availibleTags]

export const filterContext = React.createContext();

export default function FilterContextComponent({ children }) {
    const [filter, setFilter] = useState(0);
    const { items } = useContext(itemContext);
    const filteredItems = useMemo(() => {
        if (filter === 0) return items;
        return Object.fromEntries(Object.entries(items).filter(([id, item]) => {
            return item.tags.includes(allTags[filter])
        }))
    },
        [items, filter]);

    return <filterContext.Provider value={{ filter, setFilter, filteredItems }}>
        {children}
    </filterContext.Provider>
}
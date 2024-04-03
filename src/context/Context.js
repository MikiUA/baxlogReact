import React from 'react'
import ItemListContext from './ItemListContext'
import FilterContextComponent from './FilterContext'
import MuiThemeProvider from './ThemeContext'

export default function Context({ children }) {
    return <ItemListContext>
        <FilterContextComponent>
            <MuiThemeProvider>
                {children}
            </MuiThemeProvider>
        </FilterContextComponent>
    </ItemListContext>
}

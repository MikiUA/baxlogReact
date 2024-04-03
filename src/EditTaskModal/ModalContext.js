import React from "react"
export const mContext = React.createContext();

export default function ModalContext({ children, ...rest }) {
    return <mContext.Provider value={{ ...rest }}>
        {children}
    </mContext.Provider>
}
'use client'

import React, { useState } from 'react'

type Props = {
    children: React.ReactNode
}

export const DataContext = React.createContext<{
    style: string,
    setStyle: React.Dispatch<React.SetStateAction<string>>
}>({
    style: 'list',
    setStyle: () => { }
})

const Context = ({ children }: Props) => {
    const [style, setStyle] = useState('list')
    return (
        <DataContext.Provider value={{ style, setStyle }}>
            {children}
        </DataContext.Provider>
    )
}

export default Context
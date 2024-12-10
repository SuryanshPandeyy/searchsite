'use client'

import { DataContext } from '@/Context/context'
import React, { useContext } from 'react'

type Props = {
    children: React.ReactNode
}

const DataContainer = ({ children }: Props) => {
    const { style } = useContext(DataContext)

    return (
        <div className={`${style == 'grid' ? 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'} gap-10 mt-10`}>
            {children}
        </div>
    )
}

export default DataContainer
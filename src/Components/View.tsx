'use client'

import { DataContext } from '@/Context/context'
import React, { useContext } from 'react'
import { MdFormatListBulleted, MdOutlineGridView } from 'react-icons/md'

const View = () => {
    const { style, setStyle } = useContext(DataContext)

    return (
        <div className='flex shadow rounded-lg overflow-hidden border'>
            <div onClick={() => setStyle('list')} className={`p-3 ${style == 'grid' ? 'bg-transparent' : 'bg-blue-500 text-white border border-blue-500'}`}>
                <MdFormatListBulleted />
            </div>
            <div onClick={() => setStyle('grid')} className={`p-3 ${style == 'grid' ? 'bg-blue-500 text-white border border-blue-500' : 'bg-transparent'}`}>
                <MdOutlineGridView />
            </div>
        </div>
    )
}

export default View
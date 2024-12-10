'use client'

import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import { SearchParams } from 'next/dist/server/request/search-params'
import Link from 'next/link'

type Props = {
    searchParams: SearchParams
}

const Search = ({ searchParams }: Props) => {
    const [value, setValue] = useState('')

    return (
        <Container className='w-full items-center py-10 flex'>
            <div className='transition-all w-full flex border-2 rounded-xl overflow-hidden focus-within:shadow-lg'>
                <input name='search' className='w-full h-20 px-8 outline-none border-0' placeholder='Search blog'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <div>
                    <Link href={{
                        query: {
                            ...searchParams,
                            page: 0,
                            pageSize: 10,
                            search: value,
                        }
                    }} passHref className='flex items-center justify-center h-full'>
                        <Button type='submit' className='bg-slate-300 text-white py-[1.6rem] rounded-none px-14 hover:bg-blue-500' size='large'>Search</Button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Search
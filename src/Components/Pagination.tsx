import { IconButton } from '@mui/material'
import { SearchParams } from 'next/dist/server/request/search-params'
import Link from 'next/link'
import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

type Props = {
    searchParams: SearchParams,
    data: {
        skip: number,
        total: number,
        limit: number
    }
}

const Pagination = ({ searchParams, data }: Props) => {

    const paramsLeft = new URLSearchParams()
    paramsLeft.set('page', String(Number(data.skip) - 10))
    paramsLeft.set('pageSize', '10')

    const paramsRight = new URLSearchParams()
    paramsRight.set('page', String(Number(data.skip) + 10))
    paramsRight.set('pageSize', '10')

    return (
        <div className='flex w-full items-center justify-between mt-10'>
            {data.skip == 0 ?
                <LeftIcon data={data} /> :
                <Link href={{
                    query: {
                        ...searchParams,
                        ...Object.fromEntries(paramsLeft),
                    }
                }} passHref>
                    <LeftIcon data={data} />
                </Link>}

            {(data.skip + 10) >= data.total ?
                <RightIcon data={data} />
                :
                <Link href={{
                    query: {
                        ...searchParams,
                        ...Object.fromEntries(paramsRight),
                    }
                }} passHref>
                    <RightIcon data={data} />
                </Link>
            }
        </div>
    )
}

type IconProps = {
    data: {
        skip: number,
        total: number,
        limit: number
    }
}

const LeftIcon = ({ data }: IconProps) => {
    return (
        <IconButton disabled={data.skip == 0} className={data.skip == 0 ? 'bg-blue-300' : 'bg-blue-500'}>
            <BiChevronLeft color='#fff' size={25} />
        </IconButton>
    )
}

const RightIcon = ({ data }: IconProps) => {
    return (
        <IconButton disabled={data.total <= (data.skip + 10)} className={data.total <= (data.skip + 10) ? 'bg-blue-300' : 'bg-blue-500'}>
            <BiChevronRight color='#fff' size={25} />
        </IconButton>
    )
}

export default Pagination
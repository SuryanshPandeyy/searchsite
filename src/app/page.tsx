import DataContainer from '@/Components/DataContainer'
import Pagination from '@/Components/Pagination'
import Search from '@/Components/Search'
import View from '@/Components/View'
import { Container } from '@mui/material'
import { SearchParams } from 'next/dist/server/request/search-params'
import React from 'react'

type Props = {
  searchParams: Promise<SearchParams>
}

const Home = async ({ searchParams }: Props) => {
  const params = await searchParams

  const url = {
    search: `https://dummyjson.com/posts/search?q=${params.search}&skip=${Number(params.page) || 0}&limit=${params.pageSize || 10}`,
    normal: `https://dummyjson.com/posts?skip=${Number(params.page) || 0}&limit=${params.pageSize || 10}`,
  }

  const data: { posts?: { id: number, title: string, body: string }[], total: number, skip: number, limit: number } = await fetch(typeof params?.search == 'string' ? url['search'] : url['normal'])
    .then(response => response.json())

  return (
    <main>
      <Search searchParams={params} />

      <Container className='py-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-5xl font-bold'>Posts</h1>
          <View />
        </div>

        <DataContainer>
          {data?.posts?.map((item) => {
            return (
              <div key={item.id} className='shadow-lg p-10 rounded-xl flex flex-col gap-5'>
                <h2 className='text-3xl font-semibold'>{item.title}</h2>
                <p className='text-xl text-slate-800'>{item.body}</p>
              </div>
            )
          })}
        </DataContainer>

        <Pagination searchParams={params} data={data} />
      </Container>
    </main >
  )
}

export default Home
"use server"

import { redirect } from "next/navigation"

export const searchBlog = async (formData: FormData) => {
    const search = formData.get('search') as string

    const params = new URLSearchParams()
    params.set('search', search)

    redirect(`/?${params.toString()}`)
}
import type { GetBlogDetailResponse, GetListBlogResponse } from '$/backend'
import { create } from 'zustand'

export const useBlogListStore = create<GetListBlogResponse>(() => ({
	blogs: [],
	total: 0,
}))

export const useBlogDetailStore = create<GetBlogDetailResponse | null>(
	() => null,
)

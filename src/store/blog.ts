import type { GetBlogDetailResponse, GetListBlogResponse } from '$/backend'
import { create } from 'zustand'

export const useBlogListStore = create<GetListBlogResponse | null>(() => null)

export const useBlogDetailStore = create<GetBlogDetailResponse | null>(
	() => null,
)

import type { GetTagListResponse } from '$/backend'
import { create } from 'zustand'

export const useTagListStore = create<GetTagListResponse>(() => ({
	count: 0,
	tags: [],
}))

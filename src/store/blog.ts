import { create } from 'zustand'

import { Blog } from '$/backend'

export const useBlogListStore = create<Blog[]>(() => [])

export const useBlogDetailStore = create<Blog | null>(() => null)

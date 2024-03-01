import type { Blog } from '$/backend'
import { create } from 'zustand'

export const useBlogListStore = create<Blog[]>(() => [])

export const useBlogDetailStore = create<Blog | null>(() => null)

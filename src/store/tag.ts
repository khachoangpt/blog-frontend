import type { Tag } from '$/backend'
import { create } from 'zustand'

export const useTagListStore = create<Tag[]>(() => [])

import { create } from 'zustand'

import { Tag } from '$/backend'

export const useTagListStore = create<Tag[]>(() => [])

import { unstable_noStore as noStore } from 'next/cache'

import { useTagListStore } from '@/store/tag'
import { TagService } from '$/backend'

type GetTagsQuery = {
  select?: string
  skip?: number
  take?: number
  relations?: string[]
  order?: string[]
}

export const getTagList = async (query?: GetTagsQuery) => {
  noStore()
  try {
    const { tags, count } = await TagService.getTags(query ?? {})
    useTagListStore.setState(tags ?? [], true)
    return { tags: tags ?? [], count: count ?? 0 }
  } catch (error) {
    return { error: 'Something wrong when get tag list.' }
  }
}

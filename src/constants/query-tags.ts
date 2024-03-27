export const queryTags = {
	blogList: () => ['blogs'],

	blogDetail: (tags: BlogDetailTags) => [`blogs:${tags.id}`],

	me: (tags: MeTags) => [`me:${tags.jwt}`],

	tagList: () => ['tags'],
}

type BlogDetailTags = {
	id: string
}

type MeTags = {
	jwt: string
}

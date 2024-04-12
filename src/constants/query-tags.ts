export const queryTags = {
	blog: {
		all: ['blogs'],
		list: () => ['blogs'],
		detail: (tags: BlogDetailTags) => ['blogs', `blogs:${tags.id}`],
	},

	me: (tags: MeTags) => [`me:${tags.jwt}`],

	tag: {
		all: ['tags'],
		list: () => ['tags'],
	},
}

type BlogDetailTags = {
	id: string
}

type MeTags = {
	jwt: string
}

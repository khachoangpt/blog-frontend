import { PageMeta } from '@/types/routes.types'

export const pageList = {
  home: {
    title: 'Home',
    href: '/',
    isAuth: false,
    pattern: [''],
  },
  blogList: {
    title: 'Blog',
    href: '/blog',
    isAuth: false,
    pattern: ['blog'],
  },
}

export const pathList: PageMeta[] = Object.values(pageList)

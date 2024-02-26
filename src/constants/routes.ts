import { PageMeta } from '@/types/routes.types'

export const pageList = {
  blogList: {
    title: 'Blog',
    href: '/blog',
    isAuth: true,
    pattern: ['blog'],
  },
  blogDetail: (config?: { id?: string }) => ({
    title: 'Blog Detail',
    href: `/blog${config?.id}`,
    isAuth: true,
    pattern: ['blog', ''],
  }),
  login: {
    title: 'Login',
    href: '/login',
    isAuth: false,
    pattern: ['login'],
  },
  home: {
    title: 'Home',
    href: '/',
    isAuth: false,
    pattern: [''],
  },
}

export const pathList: PageMeta[] = Object.values(pageList)

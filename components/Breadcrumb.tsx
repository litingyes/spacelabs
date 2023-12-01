'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { kebabCase, startCase } from 'lodash-es'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs'

export default function Breadcrumb() {
  const paths = usePathname().split('/').filter(path => !!path)

  const breadcrumbs = useMemo(() => {
    const breadcrumbs: Array<{ name: string, href: string }> = []
    let currentPrefix = ''

    paths.forEach((item) => {
      const name = startCase(item)
      const path = kebabCase(item)
      currentPrefix = `${currentPrefix}/${path}`
      breadcrumbs.push({ name, href: currentPrefix })
    })

    breadcrumbs.unshift({
      name: 'Home',
      href: '/',
    })

    return breadcrumbs
  }, [paths])

  return (<Breadcrumbs size="lg" variant="solid" underline="hover">{breadcrumbs.map(item => (<BreadcrumbItem key={item.href} href={item.href}>{item.name}</BreadcrumbItem>))}</Breadcrumbs>)
}

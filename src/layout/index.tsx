import { SEO } from '@/utils/seo'
import classNames from 'classnames'
import { NextSeo } from 'next-seo'
import { DefaultFooter } from './DefaultFooter'
import DefaultHead from './DefaultHead'
import { DefaultHeader } from './DefaultHeader'

export default function DefaultLayout({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[]
  className?: ElementClassName
}) {
  return (
    <div
      className={classNames(
        'bg-w-900 text-b-900 leading-normal text-base',
        className
      )}
    >
      <DefaultHead />
      <NextSeo title={SEO.title()} description={SEO.description()} />
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </div>
  )
}

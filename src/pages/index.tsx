import { NextSeo } from 'next-seo'
import DefaultLayout from '@/layout'
import { SEO } from '@/utils/seo'
import { ENV_CONFIG } from '@/config'
import { getAppEnv } from '@/config/appEnv'
import { NoSsr } from '@mui/material'

export function getStaticProps() {
  console.log(
    '[getStaticProps] 当前运行环境: ',
    ENV_CONFIG.public.appEnv,
    getAppEnv()
  )
  return {
    props: {},
  }
}

export default function Index() {
  return (
    <DefaultLayout>
      <NextSeo title={SEO.title('首页')} />
      <div className='max-w-screen-desktop m-auto min-h-screen p-4 pt-12 tablet:pt-16'>
        hello world
        <NoSsr>
          <div>cur env: {ENV_CONFIG.public.appEnv}</div>
          <div>
            由于 appEnv 这个变量, preprod 和 production 的值不一致, 所以应该用
            NoSsr 组件包裹.
          </div>
        </NoSsr>
      </div>
    </DefaultLayout>
  )
}

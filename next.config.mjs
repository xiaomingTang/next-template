import nextPwa from 'next-pwa'
import { resolveRoot, webpackConfig } from './node-utils/index.mjs'

const withPWA = nextPwa({
  dest: 'public',
  disable: true, // process.env.NODE_ENV !== 'production',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    loader: 'custom',
    loaderFile: './node-utils/none-image-loader.js',
  },
  webpack: webpackConfig,
  sassOptions: {
    // 可以直接在 scss 中使用 @import 'mixin.scss',
    // 而无需带前缀 '~@/styles/mixin.scss'
    includePaths: [resolveRoot('src/styles')],
    // styles/common 中的 scss 文件统一在此处引入, 无需手动引入
    additionalData: `
      @use 'common/variables.scss' as *;
      @use 'common/mixins.scss' as *;
    `,
  },
}

export default withPWA(nextConfig)

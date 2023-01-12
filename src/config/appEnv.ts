import { S } from './string'
import commonConfig from './common.json'
import developmentConfig from './development.json'
import stagingConfig from './staging.json'
import preprodConfig from './preprod.json'
import productionConfig from './production.json'

export type AppEnv = 'production' | 'preprod' | 'staging' | 'development'
export const APP_ENV_LIST: AppEnv[] = [
  'production',
  'preprod',
  'staging',
  'development',
]

/**
 * !!!
 *
 * 注意, production getStaticProps 中使用的会是 preprod 的配置!
 *
 * 所以不要在 getStaticProps 中使用 preprod 和 production 有差异的变量!
 *
 * 详见 README.md 部署 部分
 *
 * !!!
 */
export function getAppEnv() {
  let appEnv: AppEnv = 'production'
  if (typeof window === 'undefined') {
    // 必须用解构的格式, 否则会被 nextjs 直接文本替换
    const { NEXT_PUBLIC_APP_ENV } = process.env
    appEnv = S(NEXT_PUBLIC_APP_ENV) as AppEnv
  } else if (window.INJECTED_NEXT_PUBLIC_APP_ENV) {
    appEnv = window.INJECTED_NEXT_PUBLIC_APP_ENV
  }
  if (APP_ENV_LIST.includes(appEnv)) {
    return appEnv
  }
  console.warn(
    `app env incorrect: ${APP_ENV_LIST.join(' | ')} required, got ${appEnv}.`
  )
  return 'production'
}

let localConfig: Partial<typeof commonConfig> = {}

try {
  // eslint-disable-next-line global-require
  localConfig = require('./local.json')
} catch (error) {
  // pass
}

/**
 * !!!
 *
 * 注意, production getStaticProps 中使用的会是 preprod 的配置!
 *
 * 所以不要在 getStaticProps 中使用 preprod 和 production 有差异的变量!
 *
 * 详见 README.md 部署 部分
 *
 * !!!
 */
export function getEnvConfig(env = getAppEnv()): typeof commonConfig {
  return {
    ...commonConfig,
    ...(env === 'development' ? developmentConfig : {}),
    ...(env === 'staging' ? stagingConfig : {}),
    ...(env === 'preprod' ? preprodConfig : {}),
    ...(env === 'production' ? productionConfig : {}),
    ...localConfig,
  }
}

'use server'

import manifest from '@ROOT/public/manifest.json'
import { getAppEnv, getEnvConfig } from './appEnv'

const APP_ENV = getAppEnv()

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
export const ENV_CONFIG = {
  public: {
    ...getEnvConfig(APP_ENV),
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
    appEnv: APP_ENV,
    nodeEnv: process.env.NODE_ENV,
  },
  manifest,
}

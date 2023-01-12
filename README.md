### WARNING

- 不要将 preprod 和 production 下有差异的参数用于 SSG!(详见 部署 部分)

  - 有差异部分, 可以用 NoSsr 来包裹

- 如果需要修改设备尺寸的定义, 则需要修改以下几处:

  - [tailwind.config.js](tailwind.config.js) 中的 `screens`
  - [src/styles/common/mixins.scss](src/styles/common/mixins.scss) 中的 `@mixin device`
  - [src/providers/index.tsx](src/providers/index.tsx) 中的 `muiTheme`
  - [src/utils/device.ts](src/utils/device.ts) 中的 `getPlatform` & `usePlatform`

- 如果需要修改颜色的定义, 则需要修改以下几处:
  - [tailwind.config.js](tailwind.config.js) 中的 `colors`
  - [src/styles/common/variables.scss](src/styles/common/variables.scss)
  - [src/providers/index.tsx](src/providers/index.tsx) 中的 `muiTheme`
  - 还有 [public/manifest.json](public/manifest.json) 中的 `theme_color` 和 `background_color`, 它们用的是 primary-1 的实色

### 部署

> 当前的部署方案是:

- `development` 阶段, 构建产物部署到 `development` 环境
- `staging` 阶段, 构建产物部署到 `staging` 环境
- `preprod` 阶段, 构建产物不仅部署到 `preprod` 环境, 还会直接部署到 `production` 环境; 即: `production` 环境**不会**重新构建

> 因此, 如何在 `production` 和 `preprod` 应用不一样的配置, 是一个问题. 当前采用的解决方案是, 在 `getAppEnv` 方法内部, 不同阶段执行不同的逻辑:

- 在构建(`build`)时, 读取的是构建时环境变量 `process.env.NEXT_PUBLIC_APP_ENV` (可能的取值为: `development` / `staging` / `preprod`)
- 在运行时, 执行以下逻辑:
  - (`yarn start` 或其他方式)`启动`时会执行前置脚本 [node-utils/writeEnv.js](node-utils/writeEnv.js) 读取当前运行环境, 并将当前运行环境写入到 [public/writable/\_\_ENV.js](public/writable/__ENV.js) 中, 在 [src/pages/\_document.tsx](src/pages/_document.tsx) 中引入该 js, 将当前运行环境写入到 window.INJECTED_NEXT_PUBLIC_APP_ENV 中
  - 服务端读取 process.env.NEXT_PUBLIC_APP_ENV
  - 客户端读取 window.INJECTED_NEXT_PUBLIC_APP_ENV

> 这样的方式, 能保证环境变量的准确性, 但也存在一个固有的缺点, 这是这种部署方式决定的:  
> 即: 在 `preprod` 环境下 `SSG` 生成的代码, 在 `production` 环境下执行, 必然会出现`Hydration errors - Text content does not match server-rendered HTML.`  
> 所以, 需要使用者自行注意, 不要将 `preprod` 和 `production` 下有差异的参数用于 `SSG`!!!

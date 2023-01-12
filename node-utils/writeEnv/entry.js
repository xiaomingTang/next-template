const path = require('path')
const fs = require('fs')
const { expand: expandEnv } = require('dotenv-expand')
const dotenv = require('dotenv')

function resolve(...p) {
  return path.resolve(process.cwd(), ...p)
}

function getEnv() {
  // 前面的优先级高
  const availableEnvFiles = [
    resolve('.env.local'),
    resolve(`.env.${process.env.NODE_ENV}`),
    resolve('.env'),
  ]
  availableEnvFiles.forEach((f) => {
    if (fs.existsSync(f)) {
      expandEnv(dotenv.config({
        path: f,
      }))
    }
  })
}

function main() {
  getEnv()
  const targetPath = resolve('public/writable/__ENV.js')
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV
  fs.writeFileSync(
    targetPath,
    `window.INJECTED_NEXT_PUBLIC_APP_ENV = ${JSON.stringify(appEnv)};\n`
  )

  console.log(`env [${appEnv}] write into ${targetPath}.`)
}

main()

import Script from 'next/script'
import { ENV_CONFIG } from '@/config'

interface VConsoleProps {
  /**
   * appEnv 为 production 时始终不会启用 vconsole
   */
  enabled?: boolean
}

const { appEnv } = ENV_CONFIG.public

export default function VConsoleLoader({
  enabled = appEnv !== 'production',
}: VConsoleProps) {
  if (appEnv === 'production' || !enabled) {
    return <></>
  }
  return (
    <Script
      src='/scripts/vconsole.min.js'
      onLoad={() => {
        // eslint-disable-next-line no-new
        new window.VConsole()
      }}
    />
  )
}

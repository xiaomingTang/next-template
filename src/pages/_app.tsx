import { AppProps } from 'next/app'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/plugin/localizedFormat'
import dayjsUtc from 'dayjs/plugin/utc'
import Providers from '@/providers'
import Polyfills from '@/polyfills'
import VConsoleLoader from '@/utils/VConsoleLoader'
import '@/styles/global.scss'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsLocal)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <VConsoleLoader />
      <Polyfills />
      <Component {...pageProps} />
    </Providers>
  )
}

import Head from 'next/head'
import { ENV_CONFIG } from '@/config'

export default function DefaultHead() {
  const {
    manifest,
    public: { origin },
  } = ENV_CONFIG
  return (
    <Head>
      <meta name='application-name' content={manifest.name} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={manifest.short_name} />
      <meta name='description' content={manifest.description} />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-TileColor' content='#494149' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content={manifest.theme_color} />

      <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <link rel='shortcut icon' href='/favicon.ico' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content={origin} />
      <meta name='twitter:title' content={manifest.name} />
      <meta name='twitter:description' content={manifest.description} />
      <meta
        name='twitter:image'
        content={`${origin}/android-icon-192x192.png`}
      />
      <meta name='twitter:creator' content='@xiaomin58135718' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={manifest.name} />
      <meta property='og:description' content={manifest.description} />
      <meta property='og:site_name' content={manifest.name} />
      <meta property='og:url' content={origin} />
      <meta property='og:image' content={`${origin}/apple-icon-180x180.png`} />

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}

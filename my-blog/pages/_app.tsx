import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <iframe 
          src="https://nmawungwe.substack.com/embed" 
          // width="480" 
          // height="320" 
          // style={{border:"1px solid #EEE", background:"white"}} 
          // frameborder="0" 
          // scrolling="no"
        />
      </div>
    </>
  )
}

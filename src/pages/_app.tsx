import '@/styles/globals.css'
import '@fontsource/roboto-mono/latin.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
  preload: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

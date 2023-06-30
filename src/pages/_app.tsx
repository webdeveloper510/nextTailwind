import '@/styles/globals.css'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import type { AppProps } from 'next/app'
import Header from './header'
import Footer from './footer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <Header />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
      <Footer />
    </PrismicProvider>
  )
}

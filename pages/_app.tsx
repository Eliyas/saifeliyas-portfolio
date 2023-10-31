import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/Layout'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Toaster />
    <Layout userIdMap={pageProps.data.userIdMap}>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
 

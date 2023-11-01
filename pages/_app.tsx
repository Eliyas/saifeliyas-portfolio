import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import axios from 'axios';
import { BASE_URL } from '@/utils';


export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Toaster />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
 

export const getStaticProps = async () => {
  console.log("BASE_URL :"+ BASE_URL);
  let response = await axios.get(`${BASE_URL}/api/data`);
  return {
    props: { data: response.data }
  };
};
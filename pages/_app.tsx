import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import axios from 'axios';
import { BASE_URL } from '@/utils';
import SlidingMenu from '@/components/layout/SlidingMenu';
import { createContext, useEffect, useState } from 'react';
import Header from '@/components/Header';
import MobileLayout from '@/components/MobileLayout';
import MobileHeader from '@/components/MobileHeader';
import Sidebar from '@/components/layout/Sidebar';

type MenuContextType = {
  title: string;
  isOpen: boolean;
  setTitle: (title: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  return <MenuContext.Provider value={{ title, setTitle, isOpen, setIsOpen }}>
    <Toaster />

    <div className='xs:hidden'>
      <SlidingMenu isOpen={isOpen} setIsOpen={setIsOpen}>
        <Sidebar />
      </SlidingMenu>

      <MobileLayout>
        <MobileHeader label={title} />
        <Component {...pageProps} />
      </MobileLayout>
    </div>

    <div className='hidden xs:max-2xl:block'>
      <Layout>
        <Header label={title} />
        <Component {...pageProps} />
      </Layout>
    </div>
  </MenuContext.Provider>
}


export const getStaticProps = async () => {
  console.log("BASE_URL :" + BASE_URL);
  let response = await axios.get(`${BASE_URL}/api/data`);
  return {
    props: { data: response.data }
  };
};
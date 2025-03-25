import Head from 'next/head';
import Navigation from '@/components/navigation';
import Contactusform from '@/components/contact-us';
import { tw } from 'twind';
import { useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => {
  const [isOpenContactUs, setIsOpenContactUs] = useState(false);

  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={tw(`min-h-screen flex flex-col`)}>
        <Navigation setIsOpenContactUs={setIsOpenContactUs} />
        <Contactusform isOpen={isOpenContactUs} setIsOpen={setIsOpenContactUs} />

        {children}
      </div>
    </div>
  );
};

export default Page;

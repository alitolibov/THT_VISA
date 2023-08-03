import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    const {pathname} = useRouter()
    
    return (
        <div className={pathname === '/' ? "bg" : ''}>
            <Header/>
            <main className='px-[15px] lt:max-w-[510px] lt:mx-auto lt:px-0 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
            {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
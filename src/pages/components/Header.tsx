import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import React from 'react';
import uz from '../../../public/lang/uz';
import ru from '../../../public/lang/ru';
import Language from './Language';
import en from '../../../public/lang/en';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
      };
    const {locale} = useRouter()
    let lang
    switch(locale) {
        case 'uz':
            lang = uz
          break
        case 'ru': 
        lang = ru
          break
        default:
            lang = en
          break
      }

    return (
        <motion.header
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className='bg px-[15px] pt-[27px] relative md:px-[25px]'>
            <div className="flex w-full items-center justify-between h-[57px] md:h-[77px]">
                <img src="/images/logo.png" className='w-[60px] md:w-[77px] lg:w-[85px]' alt="" />
                <nav className="flex gap-x-[10px] md:gap-x-[15px]">
                <p className="text-[#fff] text-[13px] duration-300 md:text-[15px] lg:cursor-pointer lg:hover:text-[#F6B011] lg:text-[15px]">{lang.header.services}</p>
                <p className="text-[#fff] text-[13px] duration-300 md:text-[15px] lg:cursor-pointer lg:hover:text-[#F6B011] lg:text-[15px]">{lang.header.about}</p>
                <p className="text-[#fff] text-[13px] duration-300 md:text-[15px] lg:cursor-pointer lg:hover:text-[#F6B011] lg:text-[15px]">{lang.header.employees}</p>
                </nav>
                <Language/>
            </div>
            <div className="absolute translate-y-[-50%] top-[50%] space-y-[20px]">
            <motion.h1 variants={{hidden: { opacity: 0, y: -20 }, visible}}
            className='font-[700] text-[36px] text-white leading-[44px] w-[285px] md:text-[45px] md:leading-[55px] md:w-[360px]'>{lang.header.greetings}</motion.h1>
            <motion.div variants={itemVariants} className="flex items-center gap-x-[5px]"><p className="font-[500] text-[12px] text-white md:text-[14px]">{lang.header.scroll}</p> <img className='h-[16px]' src="/images/bottom.png" alt="" /></motion.div>
            </div>
        </motion.header>
    );
};

export default Header;
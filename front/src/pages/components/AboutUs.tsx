import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import {useTranslation} from "next-i18next";
import Image from "next/image";

interface AboutUsProps {
    
}
const visible:object = { opacity: 1, y: 0, transition: { duration: 0.8 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
      };

const animation = {
    hidden: {
        x: -30,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.7}
    }
}

const AboutUs: React.FC<AboutUsProps> = () => {

    const {t} = useTranslation()
    const descText:string = t('about.dsc')
    const descText2:string = t('about.dsc2')
    const [show, setShow] = useState<boolean>(false)

      useEffect(() => {
        let dsc = document.querySelector('#dsc') as HTMLElement
        let dsc2 = document.querySelector('#dsc2') as HTMLElement
        dsc.innerHTML = descText
        dsc2.innerHTML = descText2
      }, [descText, descText2])


    return (
        <motion.section 
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true}}
        className='space-y-[20px] mb-[150px] md:flex md:justify-between md:items-center md:space-y-[50px] lg:space-y-0'>
            <div className="space-y-[40px] md:w-[50%]">
                <motion.div variants={{hidden: { opacity: 0, y: -20 }, visible}} className="relative">
                    <p  className="font-[900] text-[3.5rem] text-[var(--main-color-two)] opacity-[0.5] leading-[3.5rem] sm:text-[5rem] sm:leading-[5rem]">STORY</p>
                    <p  className="font-[600] text-[1.5rem] text-[#fff] absolute bottom-[5px] sm:bottom-[12px] sm:text-[1.75rem] text-center leading-[1.5rem] sm:leading-[1.75rem]">{t('story.title')}</p>
                </motion.div>
                <motion.div variants={itemVariants} className="text-[#fff]">
                    <p id='dsc' className='xl:text-lg'></p>
                    <p className={`${show ? 'block' : 'hidden'} xl:text-lg`} id='dsc2'></p>
                    <div onClick={() => setShow(!show)} className="flex items-center gap-x-[8px] lg:cursor-pointer mt-[15px]">
                        <p className='text-[var(--main-color-two)]'>{show ? t('about.hidden') : t('about.show')}</p>
                        <Image width={15} height={15} alt={''} src="/images/arrow_bottom.webp" className={`invert h-[15px] duration-300 ${show ? 'rotate-[-180deg]' : 'rotate-0'}`} />
                    </div>
                </motion.div>
            </div>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4, once: true}}
            variants={animation} className='aspect-square md:w-[40%]'>
                <Image src={'/images/traveler.webp'} alt={'Photo'} width={200} height={200} className={'w-full h-full'}/>
            </motion.div>
        </motion.section>
    );
};

export default AboutUs;
import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
       <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[95vh] lg:h-[85vh] md:h-[75vh] sm:h-[6vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
          <div className='grid items-center justify-items-center mt-20 md:mt-24'>
            <h1 className=' transform -translate-y-3  lg:text-[42px] md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
            <h1 className=' transform -translate-y-7  lg:text-[42px] md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <button type='button' className=' button-theme bg-slate-200  shadow-slate-200 rounded-xl my-1'>{btntext}</button>
            <div className='grid items-center gap-5 md:gap-3 absolute top-[39vh] lg:top-[33vh] left-[20%] xl:left-[10%]  w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center mt-5'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[70vh] lg:h-[60vh] md:h-[50vh] sm:h-[47vh] xsm:h-[44vh] transitions-theme -rotate-[0deg] hover:rotate-20 cursor-pointer object-fill -mt-8 '
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero;

import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Clips from '../head/Clips';
import SocialLink from './SocialLink';

export const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt on the referenced element
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 3000,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }, []);

  return (
    <div className='relative h-auto w-auto flex flex-col'>
      {/* Background Theme */}
      <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
      
      <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
        {/* Title, Subtitle, and Button */}
        <div className='grid items-center justify-items-center mt-20 md:mt-24'>
          <h1 className='transform -translate-y-3 text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>
            {title}
          </h1>
          <h1 className='transform -translate-y-5  text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200 my-3'>
            {subtitle}
          </h1>
          <button type='button' className='button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'>
            {btntext}
          </button>
          
          {/* Video Clips */}
          <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
            {videos?.map((val, i) => (
              <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
            ))}
          </div>
          
          {/* Social Links */}
          <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
            {sociallinks?.map((val, i) => (
              <SocialLink key={i} icon={val.icon} />
            ))}
          </div>
        </div>
        
        {/* Hero Image with VanillaTilt effect */}
        <div className='flex items-center mt-5'>
          <img
            ref={tiltRef}
            src={img}
            alt='hero-img'
            className='product w-auto h-[65vh] lg:h-[55vh] md:h-[51vh] sm:h-[41vh] xsm:h-[39vh] transitions-theme -rotate-[0deg] hover:rotate-20 cursor-pointer object-fill -mt-8 card'
          />
        </div>
      </div>
    </div>
  );
};




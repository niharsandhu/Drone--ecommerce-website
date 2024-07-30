import React from 'react';

export const Highlights = ({ ifExists, endpoint: { title, heading, text, img, btn, url } }) => {
  const [firstLine, secondLine] = title.split(" \n ");
  
  return (
    <div className={`flex items-center nike-container mt-6 ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='max-w-lg lg:max-w-none w-full md:text-center lg:justify-items-center'>
        <h1 className='text-2xl sm:text-1xl font-bold text-gradient m-0 typing-demo '>{heading}</h1>
        <h1 className='text-4xl lg:text-3xl md:text-2xl sm:text-1xl font-bold text-slate-900 filter drop-shadow-lg m-0' style={{ lineHeight: '1' }}>
          {firstLine}
          <br />
          {secondLine}
        </h1>
        <p className='text-[10px] my-2 text-slate-900 mt-1'>{text}</p>
        <a href={url} className="flex items-center" target={"_blank"} role="button">
          <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
        </a>
      </div>
      <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
        <img
          src={img}
          alt={`img/${heading}`}
          className={`w-auto object-contain transitions-theme mt-2 ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-52 md:h-52 sm:h-48 xsm:h-40  hover:rotate-12'}`}
        />
      </div>
    </div>
  );
};

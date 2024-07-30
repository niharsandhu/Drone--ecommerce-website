import React from 'react'

const SocialMedia = ({ icon }) => {
  return (
   <>
      <img
        src={icon}
        alt="icon/social"
        className="w-5 h-auto flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
      />
   </>
  )
}

export default SocialMedia;
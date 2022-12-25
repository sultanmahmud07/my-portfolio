import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import '../../../CommonCss/Common.css'
import './Banner.css'

const Banner = () => {
  return (
    <div className=''>
      <div className='main-bg'>
        <div className='common-w text-white'>
          <h1 className='text-6xl md:pt-32 pb-4 font-semibold'>Hello,</h1>
          <h1 className='text-6xl pb-4 font-semibold'>I'm <span className='name'><Typewriter
            words={['SHIMUL']}
           
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          /></span></h1>
          <h1 className='text-4xl font-semibold'><span className='mr-2 font-semibold'>I</span> 
            <span className='write-text'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Develop Cool Website', 'have been working with React for two years', 'love creating creative websites']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span>
          </h1>
          <h1 className='text-primary pt-12 font-bold text-2xl'>UX/UI Designer and Front-end Developer.</h1>

          <div className='pt-9'>
            <button className='button mr-4 mb-10'><a href='https://drive.google.com/file/d/15L1d46SpBclO0peng6dOOC0BOsYIgblv/view' target='blank'>My Resume</a></button>
            <button className='button2'><a href='#connect'>Connect Me</a></button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
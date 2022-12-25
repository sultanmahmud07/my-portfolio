import React from 'react';
import AboutImg from '../../../assist/image/about.png'
// import './about.css'
import '../../../CommonCss/Common.css'

const About = () => {


  return (
    <div id='about' className='common-w pt-40' >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <div  className='w-full md:w-2/5' >
            <div className='border'>
              < img className='w-full md:w-4/5 md:max-h-80' src={AboutImg} alt="" />
            </div>
          </div>
          <div className='w-full'>
            <h1 className="text-4xl pb-5 font-bold"><span className='text-accent'>A</span>bout <span className='text-accent'>M</span>e</h1>
            <p className="py-2">I have been experiencing the web development sector since 2021. During this time span, I have experienced a lot of
              front and back-end technologies. I am confident in my skills and knowledge. I am a quick learner and a dedicated
              team player too.</p>
            <p className="pb-6">I have always been interested in web development, which led me to learn web development
without studying computer science. I am constantly looking for new technologies and staying up
to date on industry trends.</p>
            <button className='btn btn-accent mr-4'><a href='https://drive.google.com/file/d/1rqaOM-GGj8oLO7zzYBsZImxW5QX44kOm/view' target='blank'>Download Resume</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
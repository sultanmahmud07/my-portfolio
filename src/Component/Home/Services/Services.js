import React, { useEffect, useState } from 'react';
import doctor from '../../../assist/service/doctor.jpg'
import photo from '../../../assist/service/photo.jpg'
import bachakena from '../../../assist/service/bechakena.jpg'
import '../../../CommonCss/Common.css'
import ProjectCard from './ProjectCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://assignment-server-iota.vercel.app/projects')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setServices(data)
        setLoading(false)
      })
  }, [])

  if(loading){
    return <p>Loading.......</p>
  }


  return (
    <div id='service' className='common-w'>
      <div className='pt-24'>
        <div className='text-center'>
          <h1 className='text-center text-5xl font-semibold py-4'><span className='text-accent'>M</span>y Pro<span className='text-accent'>j</span>ects</h1>
          <p className='md:w-3/4 mx-auto'>I have been involved in web development since last two years and have completed many projects here are some of my completed projects.</p>
        </div>

        {/* services card  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-9'>
          {
            services.map(service => <ProjectCard
            key={service._id}
            service={service}
            ></ProjectCard>)
          }
{/* 
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={doctor} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Sq Doctors Lab</h2>
              <p>This is a treatment website where doctors provide their various services, any patient can book a doctor for
                his treatment from here.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Qi Photos</h2>
              <p>On this website, a user can express his opinion through reviews. This website is intended for a
                photographer. There are three login systems</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={bachakena} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">BechaKena.com</h2>
              <p>It is a single-page website and some services are provided. Here anyone can open a seller account and sell
                their old products,</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Services;
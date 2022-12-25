import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({service}) => {
  const {_id, title, description, img} = service
  console.log(service);
  return (
    <div data-aos="flip-left" className=''>
       <div className="card card-compact w-full shadow-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{
            description.length > 100? <span>{description.slice(0, 100) + '...'} <Link>Read more</Link></span> : <span>{description}</span>
            }</p>
              <div className="card-actions justify-end">
              <Link to={`details/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ProjectCard;
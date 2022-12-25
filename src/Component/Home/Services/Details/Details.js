import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../../../CommonCss/Common.css'

const Details = () => {
  const { _id, item_details, live_link, title, img, description, detail_list, } = useLoaderData()
  const { E_date, S_date, technology, url1, url2, url3, url4 } = item_details
  console.log(item_details);
  return (
    <div className='common-w pb-16'>
      <div>
        <img src={img} alt="" />
        <div className='grid grid-cols-2 gap-9 pt-6 pb-4'>
          <div className='shadow-2xl'>
            <img className='w-full' src={url1} alt="" />
          </div>
          <div className='shadow-2xl'>
            <img className='w-full' src={url2} alt="" />
          </div>
          <div className='shadow-2xl'>
            <img className='w-full' src={url3} alt="" />
          </div>
          <div className='shadow-2xl'>
            <img className='w-full' src={url4} alt="" />
          </div>
        </div>
        <h1 className='text-3xl font-semibold text-primary pt-5 p-2'>{title}</h1>
        <div>
          <span className='pr-3'>Projects Stated: {S_date}</span>
          <span>Completed: {E_date}</span>
        </div>
        <div className='pb-4'>
          <p className='font-semibold text-xl'>Used Technology:</p>
          <span className='font-bold'>{technology}</span>
        </div>
        <ul>
          {
            detail_list.map(list => <li className='list-disc ml-6'>{list.option}</li>)
          }
        </ul>
        <div className='py-10'>
        <button className='button2'><a href={live_link} target='blank' >Live Site</a></button>
          {/* <a href={live_link}>hello</a> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
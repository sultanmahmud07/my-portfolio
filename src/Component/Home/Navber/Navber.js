import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CommonCss/Common.css'

const Navber = () => {

  const manu = <>
    <li><Link className='hover:text-[#f72585] text-xl' to='/'>Home</Link></li>
    {/* <li><Link className='hover:text-[#f72585] text-xl' to='/'>Service</Link></li> */}
    <li><a className='hover:text-[#f72585] text-xl' href='#service'>Project</a></li>
    <li><a className='hover:text-[#f72585] text-xl' href='#about'>About Me</a></li>
    <li><a className='hover:text-[#f72585] text-xl' href='#connect'>Connect me</a></li>
    <li><Link className='hover:text-[#f72585] text-xl' to='/blog'>Blog</Link></li>
  </>
  return (
    <div className='bg-primary text-white'>
      <div className='common-w'>
        <div className="navbar justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
                {
                  manu
                }
              </ul>
            </div>
            <Link to='/' className=" text-4xl font-semibold uppercase"><span className=' text-[#f72585]'>S</span>himul <span className=' text-[#f72585]'>M</span>olla</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {
                manu
              }
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navber;
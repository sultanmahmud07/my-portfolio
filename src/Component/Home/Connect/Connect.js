import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import appointment from '../../../assist/image/banner.png';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'


const ConnectUs = () => {
  const [disable, setDisable] =useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setDisable(true)
    // form.reset()
    emailjs.sendForm('service_5neuz9s', 'template_2hctw3l', form.current, 'Hfg-_Qzk46TD4iLLm')
      .then((result) => {
         console.log('object');
            Swal.fire(
              'Your message send successfully✔😃!',
              'You clicked the button!',
              'success'
            )
          
            setDisable(false)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className='my-32 bg-primary'
    // style={{
    //   background: `url(${appointment})`
    // }}
    >
      <div id='connect' className="common-w">
        <div className='w-full md:max-w-sm lg:w-1/3 mx-auto text-center py-14'>
          <div className='text-center'>
            <h3 className='text-xl font-bold text-accent'>Contact me</h3>
            <h2 className='text-white font-semibold text-3xl'>Stay connected with me</h2>
          </div>
          <div className="card flex-shrink-0  shadow-2xl">

            <form ref={form} onSubmit={sendEmail} className="card-body gap-5">
              <div className="form-control">

                <input name='user_name' type="text" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">

                <input name='user_email' type="email" placeholder="Your Email" className="input input-bordered" required />

              </div>
              <div className="form-control">

                <textarea name='message' className="textarea" placeholder="Your Text" required></textarea>

              </div>
              <div className="form-control mt-6">

                <input disabled={disable} type="submit" value="Submit" className="btn btn-accent  text-white" />
              </div>
              
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ConnectUs;
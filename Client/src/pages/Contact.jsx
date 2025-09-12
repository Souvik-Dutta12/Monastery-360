import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='w-full h-full'>
      <Nav />
      <div className='min-h-screen bg-amber-50 text-[#1d1903] pt-20'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16'>
          <div className='text-center mb-12'>
            <h1 className='prata text-4xl md:text-5xl font-bold text-red-800 mb-4'>Contact Us</h1>
            <p className='mt-3 text-red-900/70 text-lg max-w-2xl mx-auto'>
              Get in touch with us for any questions about Monastery 360, our virtual tours, or digital archives.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div className='bg-white/80 border border-amber-200 rounded-xl p-8 shadow-sm'>
                <h2 className='prata text-3xl font-bold text-red-800 mb-6'>Get In Touch</h2>
              
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-red-900 rounded-full flex items-center justify-center'>
                      <i className="ri-mail-line text-amber-100 text-xl"></i>
                    </div>
                    <div>
                      <h3 className='prata text-lg font-semibold text-red-800'>Email</h3>
                      <p className='text-red-900/80'>info@monastery360.com</p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-red-900 rounded-full flex items-center justify-center'>
                      <i className="ri-phone-line text-amber-100 text-xl"></i>
                    </div>
                    <div>
                      <h3 className='prata text-lg font-semibold text-red-800'>Phone</h3>
                      <p className='text-red-900/80'>+91 98765 43210</p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-red-900 rounded-full flex items-center justify-center'>
                      <i className="ri-map-pin-line text-amber-100 text-xl"></i>
                    </div>
                    <div>
                      <h3 className='prata text-lg font-semibold text-red-800'>Address</h3>
                      <p className='text-red-900/80'>123 Heritage Street<br />Cultural District, Delhi 110001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white/80 border border-amber-200 rounded-xl p-8 shadow-sm'>
                <h3 className='prata text-2xl font-bold text-red-800 mb-4'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <a href="#" className='w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors'>
                    <i className="ri-facebook-fill text-amber-100"></i>
                  </a>
                  <a href="#" className='w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors'>
                    <i className="ri-twitter-fill text-amber-100"></i>
                  </a>
                  <a href="#" className='w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors'>
                    <i className="ri-instagram-fill text-amber-100"></i>
                  </a>
                  <a href="#" className='w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors'>
                    <i className="ri-youtube-fill text-amber-100"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white/80 border border-amber-200 rounded-xl p-8 shadow-sm'>
              <h2 className='prata text-3xl font-bold text-red-800 mb-6'>Send us a Message</h2>
              <form className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-red-800 font-semibold mb-2 prata'>First Name</label>
                    <input 
                      type="text" 
                      className='w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:border-red-900 transition-colors'
                      placeholder='Your first name'
                    />
                  </div>
                  <div>
                    <label className='block text-red-800 font-semibold mb-2 prata'>Last Name</label>
                    <input 
                      type="text" 
                      className='w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:border-red-900 transition-colors'
                      placeholder='Your last name'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-red-800 font-semibold mb-2 prata'>Email</label>
                  <input 
                    type="email" 
                    className='w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:border-red-900 transition-colors'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label className='block text-red-800 font-semibold mb-2 prata'>Subject</label>
                  <input 
                    type="text" 
                    className='w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:border-red-900 transition-colors'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label className='block text-red-800 font-semibold mb-2 prata'>Message</label>
                  <textarea 
                    rows="5"
                    className='w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:border-red-900 transition-colors resize-none'
                    placeholder='Tell us more about your inquiry...'
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className='w-full bg-red-900 hover:bg-red-800 text-amber-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300 prata text-lg'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

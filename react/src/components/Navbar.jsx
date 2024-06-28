import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png' 
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    // const linkClass = ({ isActive }) =>
    //     isActive
    //       ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    //       : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
    
    const linkClass = 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 bg-black';
const navigate = useNavigate();
  return (
  <div>
    <nav className='bg-black border-b border-black-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <div className='flex flex-shrink-0 items-center mr-4' onClick={()=> navigate('/')}>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </div>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <div to='/' className={linkClass}>
                  Home
                </div>
                <div to='/jobs' onClick={()=>navigate('/jobs')}  className={linkClass}>
                  Jobs
                </div>
                <div to='/add-job' className={linkClass}>
                  Add Job
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar

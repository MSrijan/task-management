import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; 
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container min-w-full bg-slate-400 py-2 px-4'>
      <nav className='flex flex-wrap justify-between items-center p-3'>
        <Link to={'/'}>
          <p className='text-3xl basis-2/3 sm:basis-1/5 text-center sm:text-left'>Taskify</p>
        </Link>
        <button className='text-3xl sm:hidden ' onClick={toggleNavbar}>
          {isOpen ? <AiOutlineClose /> : <FiMenu />}
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} basis-full sm:basis-3/5 sm:block mt-4 sm:mt-0`}>
          <ul className='flex flex-col sm:flex-row justify-around items-center sm:items-start text-xl'>
            <Link to={'/'}><li className='mb-2 sm:mb-0'>Dashboard</li></Link>
            <Link to={'/tasks'}><li className='mb-2 sm:mb-0'>Tasks</li></Link>
            <Link to={'/projects'}><li className='mb-2 sm:mb-0'>Projects</li></Link>
            <Link to={'/settings'}><li>Settings</li></Link>
            <Link to={'/login'} className='sm:hidden'><li className='mt-2 sm:mt-0'>Login</li></Link>
          </ul>
        </div>
        <Link className='text-xl hidden sm:block basis-full sm:basis-1/5 text-center sm:text-right mt-4 sm:mt-0' to={'/login'}>
          Login
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

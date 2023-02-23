import React from 'react'
import { Link , useLocation} from "react-router-dom";

const Navbar = () => {

  let location = useLocation();
  React.useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-primary font-poppins">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src="./images/logo.png" className="h-6 mr-3 sm:h-9 rounded-full ring-2 ring-brand p-1" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary_text ">Notebook App</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-16 md:mt-0 md:text-xs text-primary_text">
            <li className='p-2'>
              <Link to="/" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand  ${location.pathname === '/' ? 'underline' : ''}  md:p-0 `} >Home</Link>
            </li>
            <li className='p-2'>
              <Link to="/notepage" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand ${location.pathname === '/notes' ? 'underline' : ''}  md:p-0 `} >Notes</Link>
            </li>
            <li className='p-2'>
              <Link to="/about" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand ${location.pathname === '/about' ? 'underline' : ''}  md:p-0 `}>About</Link>
            </li>
            <li className='p-2'>
              <Link to="/login" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand ${location.pathname === '/login' ? 'underline' : ''}  md:p-0 `}>Login</Link>
            </li>
            <li className='py-2 px-5  rounded-lg bg-brand text-primary font-bold text-sm'>
              <Link to="/signup" className={`block py-2 pl-3 pr-4  md:p-0 `}>Sign Up - It's Free</Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar

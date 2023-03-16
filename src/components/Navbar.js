import React from 'react'
import { Link , useLocation, useNavigate} from "react-router-dom";

const Navbar = (props) => {



  let location = useLocation();
  React.useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  let navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate("/login");
    props.showAlert("Logged Out Successfully");
  }

  return (
    <nav className=" px-5 md:px-2 sm:px-4 py-2.5 bg-primary font-poppins md:mt-2 lg:mt-0">
      <div className="container md:flex-col lg:flex-row md:space-y-4 lg:space-y-0 flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center mx-auto md:mx-0 mt-2 md:mt-0 ">
          <img src="./images/logo.png" className="h-6 mr-3 sm:h-9 rounded-full ring-2 ring-brand p-1" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary_text ">Notebook App</span>
        </Link>
        
        <div className="  md:block mx-auto md:mx-0" id="navbar-default">
          <ul className="flex p-4 mt-4 rounded-lg flex-row  md:space-x-16 md:mt-0 text-xs text-primary_text">
            <li className='p-0 md:p-2'>
              <Link to="/" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand  ${location.pathname === '/' ? 'underline' : ''}  md:p-0 `} >Home</Link>
            </li>
            <li className='p-0 md:p-2'>
              <Link to="/notepage" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand ${location.pathname === '/notepage' ? 'underline' : ''}  md:p-0 `} >Notes</Link>
            </li>
            <li className='p-0 md:p-2'>
              <Link to="/about" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand ${location.pathname === '/about' ? 'underline' : ''}  md:p-0 `}>About</Link>
            </li>
            {!localStorage.getItem('token') ? <li className='p-0 md:p-2'>
              <Link to="/login" className={`block py-2 pl-3 pr-4 hover:underline decoration-2 underline-offset-8 decoration-brand ${location.pathname === '/login' ? 'underline' : ''}  md:p-0 `}>Login</Link>
            </li> : ""}
            {!localStorage.getItem('token')  ? <li className='hidden sm:flex md:py-2 md:px-3 items-center justify-center  rounded-lg bg-brand text-primary font-bold text-sm'>
              <Link to="/signup" className={`block py-2 pl-3 pr-4  md:p-0 `}>Sign Up - It's Free</Link>
            </li> : <li onClick={handleLogout} className='hidden sm:flex md:py-2 md:px-3 items-center justify-center  rounded-lg bg-brand text-primary font-bold text-sm'>
              <Link to="/signup" className={`block py-2 pl-3 pr-4  md:p-0 `}>Log Out</Link>
            </li>}

            
          </ul>
          
        </div>
      </div>
    </nav>


  )
}

export default Navbar

import './App.css'
import hamburger from './assets/icon-hamburger.svg'
import close from './assets/icon-close.svg'
import { useState } from 'react'
import logo from './assets/logo.svg'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home'
import facebook_icon from './assets/icon-facebook.svg'
import twitter_icon from './assets/icon-twitter.svg'
import pinterest_icon from './assets/icon-pinterest.svg'
import About from './About'
import ContactUs from './ContactUs'
import pattern1 from './assets/bg-pattern-about-1-mobile-nav-1.svg'


function App() {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true);
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
  }
  

  return (
    <Router>
      <main className=''>
        <div className={`${showMenu ? 'flex ': 'hidden'} bg-black h-1564 w-360 opacity-50 z-10 absolute`}></div>
        <header className='relative flex flex-row justify-between px-6 pt-8 md:h-12 md:items-center md:mt-8 md:px-14 lg:px-40  '>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-32 h-8 md:absolute md:top-1/2 md:-translate-y-1/2 '/>
          </Link>
          
          <nav className={`${ showMenu ? 'flex flex-col' : 'hidden'} bg-deep_green absolute h-667 w-64 top-0 right-0 p-8 z-10 overflow-hidden md:inline-flex md:bg-transparent md:h-12 md:w-689 md:overflow-visible md:p-0 lg:w-1200`}>
            <button onClick={handleCloseMenu} className='ml-auto md:hidden'>
              <img src={close} alt='close menu logo'/>
            </button>
          
            <ul className='text-white text-lg font-semibold md:flex md:flex-row md:justify-between items-center md:h-12 md:w-689 md:pr-14 lg:w-1200 lg:pr-40'>
              <li className='mt-8 mb-4 md:my-0 md:-translate-x-16 lg:translate-x-32'><Link to='/' onClick={handleCloseMenu}>home</Link></li>
              <li className='mb-8 md:my-0  md:-translate-x-32 lg:-translate-x-60'><Link to='/about' onClick={handleCloseMenu} >about</Link></li>
              <li className='w-40 h-12 border-2 border-white rounded-3xl text-lg font-semibold flex flex-col justify-center items-center'><Link to='/contactUs ' onClick={handleCloseMenu}>contact us</Link></li>
            </ul>

            <img src={pattern1} alt='design pattern' className='ml-auto relative top-64 left-32 md:hidden'/>
          </nav>

          <button onClick={handleShowMenu} className={`${showMenu ? 'hidden' : 'block'} md:hidden`}>
            <img src={hamburger} alt='menu logo'/>
          </button>
        
        </header>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          
          <Route path='*' element={<Navigate to='/' replace />}/>
        </Routes>

        <footer className='flex flex-col justify-center items-center bg-dark_green py-12 md:px-12 lg:px-40'>
          <div className='md:flex md:flex-row md:justify-between md:w-full md:mt-6 md:mb-5 '>
            <div className='md:h-102 md:w-107  lg:w-40'>
              <img src={logo} alt='logo' className='w-24 h-6 mb-4 lg:w-40 lg:h-10'/>

              <div className='flex flex-row justify-around items-center text-white w-107 mb-4 md:translate-y-full md:w-full md:justify-between lg:text-lg'>
                <Link>home</Link>
                <Link>about</Link>
              </div>

            </div>

            

            <p className='text-gray-300 text-center text-15 mb-6 md:text-right lg:-translate-x-97'>987 Hillcrest Lane <br className='my-1'/> Irvine, CA <br className='mb-1'/> California 92714 <br className='mb-1'/> Call Us : 949-833-7432</p>


          </div>
         
         <div className='md:flex md:flex-row md:justify-between md:w-full lg:flex-col lg:ml-auto  lg:w-255 lg:h-102 lg:-mt-36'>
 
            <div className='flex flex-row justify-around items-center w-104 mb-3 lg:translate-x-36'>
              <img src={facebook_icon} alt='facebook icon'/>
              <img src={pinterest_icon} alt='pinterest icon'/>
              <img src={twitter_icon} alt='linkedin icon'/>
            </div>

            <p className='font-semibold text-gray-300 text-15'> Copyright 2020. All Rights Reserved </p>
         </div>
        </footer>

      </main>
    </Router>
  )
}

export default App

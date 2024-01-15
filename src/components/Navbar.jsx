import React from 'react'
import { BsCameraVideoFill, BsFillTvFill, BsHouseDoorFill, BsPlusLg, BsSearch, BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import DisneyLogo from '../assets/images/header_logo.svg'

export default function Navbar() {
    const NavItem = (props) => {
        return (<div className='relative flex cursor-pointer items-center space-x-3 navitem-hover:w-full'>
            {props.children}
            <span className='absolute right-0 bottom-[-5px] left-[-12px] h-[3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear' />


        </div>)
    }

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 w-full overflow-hidden bg-body-bg'>
            <div className='container mx-auto flex items-center justify-between px-10 py-3'>
                <div className='flex items-center gap-16'>
                    <Link to="/">
                        <img className='w-28' src={DisneyLogo} alt='logo' />
                    </Link>
                    <div className='hidden gap-10 xl:flex'>
                        <NavItem>
                            <BsHouseDoorFill className='w-6 h-6 color-white' />
                            <p className='text-white'>Home</p>
                        </NavItem>
                        <NavItem>
                            <BsSearch className='w-6 h-6 color-white' />
                            <p className='text-white'>Search</p>
                        </NavItem>
                        <NavItem>
                            <BsPlusLg className='w-6 h-6 color-white' />
                            <p className='text-white'>Watchlist</p>
                        </NavItem>
                        <NavItem>
                            <BsStarFill className='w-6 h-6 color-white' />
                            <p className='text-white'>Originals</p>
                        </NavItem>
                        <NavItem onClick={() => navigate("/movies")}>
                            <BsCameraVideoFill className='w-6 h-6 color-white' />
                            <p className='text-white'>Movies</p>
                        </NavItem>
                        <NavItem>
                            <BsFillTvFill className='w-6 h-6 color-white' />
                            <p className='text-white'>Series</p>
                        </NavItem>
                    </div>
                </div>
                <button className='transparent rounded border border-white bg-black bg-opacity-60 px-5 py-2 text-lg uppercase tracking-wider text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black'>Login</button>
            </div>
        </nav>
    )
}

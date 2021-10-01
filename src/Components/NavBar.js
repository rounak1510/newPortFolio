import { NavLink } from 'react-router-dom'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-center">
                <nav className="">
                    <NavLink to="/"
                     activeClassName="text-white"
                     exact className="inline-flex items-center px-6 py-6 mr-4 text-blue-100 hover:text-red-400 text-4xl font-bold tracking-widest">
                        Adarsh
                    </NavLink>
                    <NavLink to="/about"
                    activeClassName="text-blue-100 bg-blue-800"
                    className="inline-flex items-center px-6 py-6 my-6 rounded text-blue-200 hover:text-red-400">
                        About
                    </NavLink>
                    <NavLink to="/project"
                    activeClassName="text-blue-100 bg-blue-800"
                    className="inline-flex items-center px-6 py-6 my-6 rounded text-blue-200 hover:text-red-400">
                        Project 
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-blue-100 bg-blue-800"
                    className="inline-flex items-center px-6 py-6 my-6 rounded text-blue-200 hover:text-red-400">
                        Blog Posts
                    </NavLink>
                </nav>
            </div>
        </header>    
    )
}

export default NavBar

import { NavLink } from 'react-router-dom'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

function NavBar() {
    return (
        <footer className="bg-blue-600">
            <div className=" flex justify-center">
                <button className="text-gray-800 content-center text-lg mx-100 text-center mt-8 font-blog px-3 py-3 bg-blue-100 text-blue-100 rounded">
                                <a href="https://drive.google.com/file/d/1HmToPDrWxmjE-PldxzupH-Pjanf2HXb_/view?usp=sharing" target="_blank" className="text-blue-500 hover: text-blue-300">Resume</a>
                            </button>
                </div>
            <div className="container mx-auto flex justify-center">
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/adarsh.singhrathore.165/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }} />
                    <SocialIcon url="https://www.instagram.com/adarsh___30/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/adarsh-kumar-singh-6339b8190/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }} />
                    <SocialIcon url="https://github.com/adarsh-3099" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }} />
                </div>
            </div>
        </footer>    
    )
}

export default NavBar

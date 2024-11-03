import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
     const [open, setOpen] = useState(false);

     const handleClick = () => setOpen(!open);

     const content = (
          <div className={`lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 ${open ? "block" : "hidden"}`}>
               <ul className="text-center text-xl p-5 cursor-pointer">
                    <Link spy={true} smooth={true} to="home">
                         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to="about">
                         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                    </Link>
                    <Link spy={true} smooth={true} to="service">
                         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Service</li>
                    </Link>
                    <Link spy={true} smooth={true} to="project">
                         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Project</li>
                    </Link>
                    <Link spy={true} smooth={true} to="contact">
                         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                    </Link>
               </ul>
          </div>
     );

     return (
          <nav>
               <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-6 py-4 bg-slate-900 border-b  border-slate-800">
                    <div className="flex items-center flex-1">
                         <span className="text-3xl font-bold cursor-pointer">My Portfolio</span>
                    </div>
                    <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                         <ul className="flex gap-8 text-[18px]">
                              <Link spy={true} smooth={true} to="home">
                                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Home</li>
                              </Link>
                              <Link spy={true} smooth={true} to="about">
                                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">About</li>
                              </Link>
                              <Link spy={true} smooth={true} to="service">
                                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Service</li>
                              </Link>
                              <Link spy={true} smooth={true} to="project">
                                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Project</li>
                              </Link>
                              <Link spy={true} smooth={true} to="contact">
                                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                              </Link>
                         </ul>
                    </div>
                    <div>
                         {open && content}
                    </div>
                    <button onClick={handleClick} className="block lg:hidden md:block  transition">
                         {open ? <IoMdClose className="text-3xl" /> : <IoMdMenu className="text-3xl" />}
                    </button>
               </div>
          </nav>
     );
};

export default Navbar;

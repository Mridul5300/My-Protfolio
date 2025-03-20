import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import MyImg from '../../../public/Protfolio.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        });
    }, [])

    return (
        <div id="home" className="lg:px-56 px-10 sm:px-10 lg:py-0 py-28 text-center gap-5 sm:mt-6 lg:text-start flex lg:flex-row flex-col justify-center items-center lg:gap-28 lg:items-center text-white">
            <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-white">
                <h1 data-aos='fade-right' className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-semibold mb-8 sm:mb-7 whitespace-nowrap leading-normal ">
                    HI, Welcome To My Protfolio<br />
                    <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-semibold mb-8 sm:mb-7 whitespace-nowrap leading-normal ">I Am Mrdul Sarker</span> <br />
                    <span className="text-fuchsia-500">
                        <Typewriter
                            words={["Junior Web Developer"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p data-aos='fade-left' className="text-xs sm:text-base md:text-lg lg:text-xl">
                I am a MERN Stack Web Developer,I am proficient in modern technologies like Tailwind CSS, React JS, Express JS, Node JS, Next JS, and Framer Motion, which enable me to build efficient, interactive, and high-performance web applications that provide users with an outstanding experience. 
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex -mt-2 space-x-2">
                            <a href="https://github.com/Mridul5300" className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-1 sm:p-2">
                                <AiFillGithub className="text-[24px] sm:text-[28px]" />
                            </a>
                            <a href="https://www.linkedin.com/in/mridul-sarker-2237a2333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-1 sm:p-2">
                                <FaLinkedinIn className="text-[24px] sm:text-[28px]" />
                            </a>
                            <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-1 sm:p-2">
                                <FaTwitter className="text-[24px] sm:text-[28px]" />
                            </a>
                            <a href="" className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-1 sm:p-2">
                                <FaInstagram className="text-[24px] sm:text-[28px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image with animated border */}
     
            <img
                data-aos="fade-up"
                src={MyImg}
                width={280}
                height={300}
                alt=""
                className="rounded-full object-contain img_glow mt-5 sm:mt-0 border-animation"
            />
        </div>
    );
};

export default Banner;


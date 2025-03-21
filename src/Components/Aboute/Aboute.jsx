import MyImg from '../../../public/Protfolio.jpg';
import Resume from '../../assets/Mridul Full-Stack Resumi .pdf';

const About = () => {
     const handleResume = () => {
          window.open(Resume, '_blank');
          
          setTimeout(() => {
               const link = document.createElement('a');
               link.href = Resume;
               link.download = 'Mridul Full-Stack Resumi .pdf';
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
          }, 100);
     };

     return (
          <div id="about" className="">
               <div className="lg:px-56 px-5 sm:px-10 lg:py-0 py-5 text-center gap-3 sm:mt-2 lg:text-start flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-20 lg:items-center text-white">
               <img data-aos='fade-down' src={MyImg} width={280} height={200} alt="" className="rounded border-2 p-1 py-1 m-2 sm:justify-end border-fuchsia-500 object-contain img_glow mt-5 sm:mt-0" />
               <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-white">
                    <h1 data-aos='fade-right' className="text-[28px] text-fuchsia-500 sm:text-[36px] md:text-[48px] lg:text-[52px] font-semibold mb-5 sm:mb-7 leading-normal uppercase">
                         about me
                    </h1>
                    <h2 data-aos='fade-left' className="text-xs sm:text-base md:text-lg lg:text-xl">
                    I’m Mridul Sarker, an experienced MERN Stack Web Developer. I hold a Diploma in Computer Science and Technology and specialize in building feature-rich, user-friendly websites using modern technologies. My goal is to create high-performance web applications that deliver an exceptional user experience.
                    </h2>
                    <div className="flex mt-6 sm:mt-8 gap-2">
                         <div className="flex items-center justify-center">
                              <div className="flex space-x-2"> 
                                   <button 
                                        onClick={handleResume}
                                        className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'
                                   >
                                        Download Resume
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
               </div>   
                 </div>
     );
};

export default About;
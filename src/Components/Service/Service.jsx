

const Service = () => {
     return (
          <div id="service" className="p-20 flex flex-col items-center justify-center">
               <h1 className="text-[52px] font-semibold leading-normal mb-20 uppercase text-fuchsia-500">Services</h1>
               <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-around gap-20">
                    <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-_glow"  >HTML5</h2>
                    <h2 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-_glow"  >CSS3</h2>
                    <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-_glow"  >JavaScript</h2>
                    <h2 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-_glow"  >React</h2>
                    <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-_glow"  >MongoDB</h2>
               </div>
          </div>
     );
};

export default Service;
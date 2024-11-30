

const Contact = () => {
     return (
          <div id="contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
               <h1 data-aos="fade-left" className="text-[52px] font-semibold leading-normal mb-20 uppercase text-fuchsia-500">Contact Me</h1>
               <from action="" className="flex flex-col  gap-2 lg:w-1/2" >
                    <div className="lg:flex gap-9 ">
                         <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 borer-2 border-fuchsia-800 b-_glow text-xl text-slate-500" placeholder="Enter Name your" type="text" />
                         <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 borer-2 border-fuchsia-800 b-_glow text-xl text-slate-500" placeholder="Enter Numbar your" type="email" />
                    </div>
                    <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 borer-2 border-fuchsia-800 b-_glow text-xl text-slate-500" placeholder="Write Your Massage...." name="" id="" cols={30}></textarea>
                    <button className="neno-button shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden  b-_glow text-xl text-bold my-6" type="submit">Submit</button>
               </from>
          </div>
     );
};

export default Contact;
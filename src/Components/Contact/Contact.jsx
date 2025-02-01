import axios from "axios";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
     const [name,setName]=useState('');
     const [email,setEmail]=useState('');
     const [message,setMessage]=useState('');

     const handlesercvice = async (e) =>{
          e.preventDefault();
          const servicekey = import.meta.env.VITE_SERVICE_KEY;
          const templetekey = import.meta.env.VITE_TEMPLATE_KEY;
          const publickey =  import.meta.env.VITE_PUBLIC_KEY;
          
          const data = {
               service_id: servicekey,
               template_id: templetekey,
               user_id: publickey,
               template_params: {
                   from_name:name,
                   from_email:email,
                   to_name:"MR Company Ltd",
                   message:message
               }
           };
           try{
               const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
               console.log(res.data);
               setEmail('');
               setName('');
               setMessage('');

               toast.success("Your message was sent successfully!");
           } catch(error){
               console.log(error); 
               toast.error("Failed to send the message. Please try again.");    
           }
     }
     return (
          <div id="contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
               <h1 data-aos="fade-left" className="text-[52px] font-semibold leading-normal mb-20 uppercase text-fuchsia-500">Contact Me</h1>
               <form action=""  onSubmit={handlesercvice}  className="flex flex-col  gap-2 lg:w-1/2" >
                    <div className="lg:flex gap-9 ">
                         <input 
                         className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-_glow text-xl text-slate-500" placeholder="Enter Name your" 
                         type="text"
                         required
                         value={name}
                         onChange={(e) => setName(e.target.value)} 
                         />
                         <input 
                         className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-_glow text-xl text-slate-500" placeholder="Enter Email your" 
                         type="email"
                         required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <textarea 
                    className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-_glow text-xl text-slate-500" placeholder="Write Your Massage...."  
                    required
                    cols={30}
                    rows={9}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    >          
                    </textarea>
                    <button 
                    className="neno-button shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden  b-_glow text-xl text-bold my-6" 
                    type="submit">
                    Submit
                    </button>
               </form>
               <ToastContainer
               position="bottom-left"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               transition={Bounce}
               />
          </div>
     );
};

export default Contact;

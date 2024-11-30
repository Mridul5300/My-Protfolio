import img1 from "../../../public/img1.png"
import img2 from "../../../public/img2.png"
import img3 from "../../../public/img3.png"
import img4 from "../../../public/img4.png"

const Project = () => {
     return (
<div id="project" className="p-20 flex flex-col items-center justify-center">
  <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal mb-20 uppercase text-fuchsia-500">Projects</h1>
  <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-around gap-10">
    <a href="https://techproduct-website.web.app/" target="_blank" rel="noopener noreferrer">
      <img data-aos="fade-up" height={400} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b-_glow" src={img1} alt="Project 1" />
    </a>
    <a href="https://restrurent-web.web.app/" target="_blank" rel="noopener noreferrer">
      <img data-aos="fade-down" height={400} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b-_glow" src={img2} alt="Project 2" />
    </a>
    <a href="https://gatewaymanson.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img data-aos="fade-up" height={400} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b-_glow" src={img3} alt="Project 3" />
    </a>
    <a href="https://internisitb.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img data-aos="fade-down" height={400} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b-_glow" src={img4} alt="Project 4" />
    </a>
  </div>
</div>

     );
};

export default Project;
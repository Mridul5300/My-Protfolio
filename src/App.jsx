import './App.css'
import Aboute from './Components/Aboute/Aboute';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Service from './Components/Service/Service';
function App() {
  
  return (
    <>
  <div className='bg-slate-900'>
     <Navbar></Navbar>
     <Banner></Banner>
     <Aboute></Aboute>
     <Service></Service>
     <Project></Project>
     <Contact></Contact>
  </div>
  </>
  )
}

export default App;
import './App.css'
import Aboute from './Components/Aboute/Aboute';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
function App() {
  
  return (
    <>
  <div className='bg-slate-900'>
     <Navbar></Navbar>
     <Banner></Banner>
     <Aboute></Aboute>
     <Service></Service>
  </div>
  </>
  )
}

export default App;
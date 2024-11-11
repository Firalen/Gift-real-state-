import { useNavigate } from 'react-router-dom';
import back from '../assets/backgeound.jpg'
import About from './about'
import Why from './why'
import Feedback from './feedback'
import Contact from './contact'
import About1 from './about1'

function Home() {
  const navigate = useNavigate();

  return (
    <>
    {/* <Navbar /> */}
    <div className='flex  bg-cover bg-center bg-no-repeat h-screen w-full opacity-70 ' style={{ backgroundImage: `url(${back})` }}>
      <div className='  flex flex-col justify-center pl-[200px] '>
    
        <h1 className=' text-white/100 pt-[100px] text-5xl font-bold italic hover:text-green-500'>
          Let us help <br />
          you find your <br />
          dream home
        </h1>
        <div className='flex pt-[100px]'>
          <button className='m-4 w-[25%] border-2 border-black text-white/100 px-2 rounded-lg transition duration-300 hover:border-green-500 hover:text-green-500 font-bold ' onClick={() => navigate('/about')}>
            BUY HOME
          </button>
          <button className='m-4 w-[35%] border-2 border-black text-white/100 px-2 rounded-lg transition duration-300 hover:border-green-500 hover:text-green-500 font-bold ' onClick={() => navigate('/rent')}>
            DISCOVER
          </button>
        </div>
      </div>
      
    </div>
     <About />
     <About1 />
     <Why />
     <Contact /> 
     <Feedback />
     
   </>

  );
}

export default Home;

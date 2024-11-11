/* eslint-disable react-hooks/rules-of-hooks */
import image from '../assets/background.jpg'
import { useNavigate } from 'react-router-dom'

const About1 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative">
      <img className="w-full h-screen object-cover opacity-100" src={image} alt="background" />
      <div className="absolute bg-green-800 top-[10%] left-[10%] md:top-[15%] md:left-[15%] lg:top-[20%] lg:left-[20%] p-4 w-11/12 md:w-2/3 lg:w-1/3 space-y-8 justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">Establishment</h1>
        <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
          GIFT Real Estate P.L.C. is one of the core businesses of the GIFT Business Group.
          It is one of the pioneering real estate companies in Ethiopia, established in 2005.
          It has a solid reputation due to its substantial contributions to the growth of Ethiopia’s 
          real estate market. Its ambitious goal is to provide services to several cities in Ethiopia 
          and other African nations.
        </p>
        <div className="text-center">
          <button 
            className="text-white border border-t-2 border-white hover:bg-yellow-500 m-2 p-2 w-full md:w-auto"
            onClick={() => navigate('/description')}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About1;

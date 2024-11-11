/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { useNavigate } from 'react-router-dom';

const Item = ({ img, text, text1, text2, address, description }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setLiked(!liked);
  };

  const handleClick = () => {
    navigate('/detail'); 
  };

  return (
    <div className="border border-t-2 shadow-lg shadow-black h-[500px] w-[400px] space-y-8 pb-8">
      <div className="relative opacity-75 hover:opacity-100">
        <img
          className="w-full h-auto object-cover transition-opacity duration-300"
          src={img}
          alt={text}
          loading="lazy"
          onClick={handleClick}
        />

        <div className="absolute inset-0 flex items-start justify-between p-3 cursor-pointer">
          <div className="space-x-2">
            <span className="text-white font-thin text-lg bg-yellow-300 px-2 py-1 rounded">
              {text1}
            </span>
            <span className="text-white font-thin text-lg bg-black/60 px-2 py-1 rounded">
              {text2}
            </span>
          </div>
          <div onClick={handleToggle} className="cursor-pointer">
            {liked ? (
              <AiFillHeart className="text-red-500 text-3xl" />
            ) : (
              <AiOutlineHeart className="text-gray-500 text-3xl" />
            )}
          </div>
        </div>
      </div>

      <div className="px-2 space-y-3 ">
        <h1 className="font-large text-4xl mb-1">{text}</h1>
        <p className="text-gray-600 text-sm font-large">
          <EditLocationAltIcon /> {address}
        </p>
        <p className="text-gray-500 text-sm">{description}</p>
        <h1>
          <BedIcon /> <ShowerIcon /> <CarRentalIcon />
        </h1>
        <button onClick={handleClick} className='border text-black  rounded-lg border-black/100 hover:border-green-500 hover:text-green-500 '>Detail</button>
      </div>
    </div>
  );
};

export default Item;

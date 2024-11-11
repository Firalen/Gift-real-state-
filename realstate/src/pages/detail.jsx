import ShowerIcon from '@mui/icons-material/Shower';
import CabinIcon from '@mui/icons-material/Cabin';
import { AiOutlineCheckCircle } from 'react-icons/ai';
const detail = () => {
  return (
    <>
    <div className="pt-8 space-y-4 bg-gray-100">
      <div className='space-y-4 '>
      <h1 className='pl-[100px] font-bold lg:text-4xl sm:text-2xl md:text-3xl'>GIFT REAL STATE</h1>
      <div className='flex space-x-2 pl-[100px]'>
        <h1 className='bg-gray-700 text-white'>Featured</h1>
        <h1  className='bg-yellow-500 text-white'>For sale</h1>
        <h1  className='bg-gray-700 text-white'>Reduced Price</h1>
      </div>
    
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  space-y-4 '>
        <div className='border-r border-gray-500 text-center'>
          <h1 className="font-bold">Commercial Apartment</h1>
          <h1 className="font-thin">Property Type</h1>
        </div>
        <div className='border-r border-gray-500 text-center'>
          <h1><ShowerIcon />1</h1>
          <h1 className='font-thin'>Bathroom</h1>

        </div>
        <div className='text-center'>
          <h1 className='font-bold'><CabinIcon /> 40-173</h1>
          <h1 className='font-thin'>sq.mt</h1>
        </div>
      </div>
      <div className='space-y-4 pl-[120px] border border-t bg-white'>
        <h1 className='font-bold'>Description</h1>
        <h1 className='font-bold'>CONDO PROJECT</h1>
        <h1 className='font-thin'>G+16, 100 Family Apartment,</h1>
        <h1 className='font-thin'>Square meter:From <span className='font-bold'>40.9</span> up to <span className='font-bold'>173.5</span>Sq.Mt</h1>
        <h1 className='font-thin'>Floor: From Ground to Second floor</h1>
        <h1 className='font-thin'>Around Bole Atlas traffic light Next to Noah Real estate</h1>
        <h1 className='font-thin'>Down Payment: 10%<br></br>Delivery 30 month</h1>
      </div>
      <div className='bg-white space-y-4 p-[100px]'>
        <h1 className='font-bold'>Address</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 border-t gap-8'>
        <div>
          <h1 className='font-bold'>City</h1>
          <h1 className='font-thin'>Adis Ababa</h1>
        </div>
        <div  className='sm:border-t'>
          <h1 className='font-bold'>Country</h1>
          <h1 className='font-thin'>Ethiopia</h1>
        </div>

        <div  className='sm:border-t'>
          <h1 className='font-bold'>Area</h1>
          <h1 className='font-thin'>Atlas</h1>
        </div>
        </div>
      </div>
      <div className='p-[100px] bg-white space-y-4'>
      <h1 className='font-bold text-2xl'>Features</h1>
        <div className='gap-4 space-y-2 border-t grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <h1 className='flex items-center'><AiOutlineCheckCircle />Barbeque</h1>
          <h1 className='flex items-center'><AiOutlineCheckCircle />Dryer</h1>
          <h1 className='flex items-center'><AiOutlineCheckCircle />Elevator</h1>
          <h1 className='flex items-center'><AiOutlineCheckCircle />Gym</h1>
          <h1 className='flex items-center'><AiOutlineCheckCircle />Laundry</h1>
          <h1 className='flex items-center'><AiOutlineCheckCircle />Parking Spce</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default detail

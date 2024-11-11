import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';



const footer = () => {
  return (
   <div className='bg-green-900 text-white space-x-4 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-between p-8 space-y-4'>

      <div className='space-y-8'>
        <h1 className='text-3xl font-bold text-white'>Opening Hours</h1>
      <div className='font-thin space-y-8'>
        <h1>Monday-Friday</h1>
        <h1>8:00AM-5:00PM</h1>
        <h1>Saturday</h1>
        <h1>8:00AM-12:00PM</h1>
      </div>
      </div>
      <div className='space-y-8'>
        <h1 className='text-3xl font-bold text-white'>Address</h1>
        <div className='font-thin space-y-8'>
          <h1>Behar Building,9th floor,Africa Avenue</h1>
          <h1>Addis Ababa,Ethiopia</h1>
          <h1>Call:8055</h1>
          <h1>0930076726 or 0912507906</h1>
        </div>
      </div>
   
   
      <div className='space-y-8'>
        <h1 className='text-3xl font-bold text-white'>Follow Us</h1>
        <div className='font-thin space-y-8 cursor-pointer'>
        <h1><YouTubeIcon />YouTube</h1>
        <h1><FacebookIcon />Facebook</h1>
        <h1><TelegramIcon />Telegram</h1>
        <h1><XIcon />Twitter</h1>
        </div>
      </div>

      <div className='space-y-8'>
        <h1 className='text-3xl font-bold text-white'>Sister Companies</h1>
        <div className='font-thin space-y-8'>
        <h1>GIFT Business Group</h1>
        <h1>GIFT Trading</h1>
        <h1>GIFT Construction</h1>
        <h1>GIFT Steel manufacturing</h1>
        <h1>GIFT  Building materials Manufacturing</h1>
        <h1>GIFT Property Manufacturing</h1>
        </div>
    </div>
    © GIFT Real Estate plc
  </div>
  )
}

export default footer

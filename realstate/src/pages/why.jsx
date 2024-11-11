import NearMeIcon from '@mui/icons-material/NearMe';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CheckIcon from '@mui/icons-material/Check';
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const why = () => {
  return (
  <div className='space-y-8 p-8'>
     <h1 className='text-4xl font-large text-center'>Why You Choose Us</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 space-x-4 p-4'>
      <div className='space-y-4'>
        <h1 className='text-center '><NearMeIcon /></h1>
        <h1 className='text-2xl font-bold text-center'>Location</h1>
        <p className='font-thin'>Discover properties tailored to your lifestyle, offering convenient access to amenities, schools,
         and transportation hubs.</p>
    </div>
    <div className='space-y-4'>
        <h1 className='text-center'><CurrencyExchangeIcon /></h1>
        <h1 className='text-2xl font-bold text-center'>Affordable</h1>
        <p className='font-thin'>Find your dream home without breaking the bank. Our diverse portfolio ensures quality and affordability<br></br>
        with transparent pricing and flexible options.</p>
    </div>
    <div className='space-y-4'>
      <h1 className='text-center'><CheckIcon /></h1>
      <h1 className='text-2xl font-bold text-center'>Quality</h1>
      <p className='font-thin'>Invest confidently in properties that prioritize safety, security, and durability. Rigorous inspections and  reputable partnerships<br></br>
      ensure lasting value.</p>
    </div>
    <div className='space-y-4'>
    <h1 className='text-center'><HomeIcon /></h1>
    <h1 className='text-2xl font-bold text-center'>Safety and Security</h1>
    <p className='font-thin'>Your safety is our top priority. Explore neighborhoods with excellent security records and properties equipped with essential <br></br>
    safety features.</p>
    </div>
    <div className='space-y-4'>
     <h1 className='text-center'> <SignalCellularAltIcon /></h1>
     <h1 className='text-2xl font-bold text-center'>Investment</h1>
     <p className='font-thin'>Secure your future with properties poised for appreciation, aligning with your long-term goals and
     aspirations</p>
    </div>
    <div className='space-y-4'>
      <h1 className='text-center'><ContentCopyIcon /></h1>
      <h1 className='text-2xl font-bold text-center'>Amendity</h1>
      <p className='font-thin'>Experience unparalleled comfort and convenience with amenity-rich properties tailored to your desires.</p>
    </div>
    </div>
    </div>
  )
}

export default why

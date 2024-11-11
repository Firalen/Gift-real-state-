import back from '../assets/backgeound.jpg';
import ceo from '../assets/ceo.jpg';
import logo from '../assets/logo.png';

const Description = () => {
  return (
    <>
      <div 
        className="bg-cover bg-center bg-no-repeat h-[400px] w-full opacity-70 flex items-center justify-center "
        style={{ backgroundImage: `url(${back})` }}
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center p-8">ABOUT US</h1>
      </div>

      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6 p-4 pt-[100px]">
        <div className="space-y-8 lg:w-2/3">
          <h1 className="text-xl md:text-2xl font-bold">GIFT Real Estate plc</h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            GIFT Real Estate P.L.C. is one of the core businesses of the GIFT Business Group. It has a solid reputation due to
            substantial contributions to Ethiopia’s real estate market. Its goal is to serve several cities in Ethiopia and
            other African nations.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            GIFT Real Estate is renowned for producing a variety of homes that cater to different market segments. Its offerings
            to Addis Ababa include opulent villas, apartments, row houses, and more, which are designed for lifestyle and future
            generations, particularly in desirable areas such as CMC and its surroundings.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            Today, GIFT Real Estate is expanding throughout the city, with locations in Bole, Olympia, Teklehaymanot, and Siddist Killo.
          </p>
        </div>

        <div className="space-y-4 lg:w-1/3 text-center lg:text-left">
          <h1 className="text-xl md:text-2xl font-bold">GIFT Real Estate Founder and CEO</h1>
          <h2 className="text-lg font-medium">Mr. Gebreyesus Igata</h2>
          <img className="w-full lg:w-[650px] object-cover mx-auto lg:mx-0" src={ceo} alt="CEO" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 p-8 lg:p-[100px]">
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <img className="w-1/2 mx-auto lg:mx-0" src={logo} alt="Company Logo" />
        </div>

        <div className="lg:w-2/3 space-y-4">
          <h1 className="font-bold text-xl">VISION</h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            Gift Real Estate aims to become a top real estate company in East Africa within 20 years, delivering versatile,
            desirable, and high-value properties for various social classes in urban markets.
          </p>

          <h1 className="font-bold text-xl">MISSION</h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            GRE’s mission is to provide modern residential and commercial properties, enhancing customers lifestyles to a
            higher standard of 21st-century living.
          </p>

          <h1 className="font-bold text-xl">CORE VALUES</h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            - Putting the customer first, ensuring their needs and expectations are met.<br />
            - Recognizing employees as vital assets, promoting their growth.<br />
            - Focusing on environmentally sustainable community development.<br />
            - Striving for excellence through superior performance, quality services, and continuous improvement.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;

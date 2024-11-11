const Feedback = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center">
      <h1 className="text-black text-3xl md:text-4xl italic pt-10 md:pt-[100px] px-4 md:px-0 font-bold">
        Happy Clients
      </h1>
      
      <div className="text-black font-thin flex flex-col md:flex-row px-4 md:px-[100px] py-8 md:py-[50px] justify-between w-full max-w-7xl space-y-8 md:space-y-0 md:space-x-8">
      
        <div className="border-t-4 border-gray-600 border-dotted pt-4 md:pt-8 md:w-1/3">
          <p className="text-base md:text-lg leading-relaxed">
            Boost your product and services <br />
            credibility by adding testimonials <br />
            from your clients. People love<br />
            recommendations so feedback from <br />
            others who have tried it is invaluable.
          </p>
          <p className="pt-4 md:pt-8 text-sm md:text-base">- Melal Feyisa</p>
        </div>

        <div className="border-t border-gray-600 pt-4 md:pt-8 md:w-1/3">
          <p className="text-base md:text-lg leading-relaxed">
            Boost your product and services<br />
            credibility by adding testimonials<br />
            from your clients. People love<br />
            recommendations so feedback from<br />
            others who have tried it is invaluable.<br />
            Boost your product and services<br />
            credibility by adding testimonials<br />
            from your clients.
          </p>
          <p className="pt-4 md:pt-8 text-sm md:text-base">- Kasech Kebebew</p>
        </div>

        <div className="border-t-4 border-gray-600 border-dotted pt-4 md:pt-8 md:w-1/3">
          <p className="text-base md:text-lg leading-relaxed">
            Boost your product and services <br />
            credibility by adding testimonials<br />
            from your clients.
          </p>
          <p className="pt-4 md:pt-8 text-sm md:text-base">- Dagim Teshome</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

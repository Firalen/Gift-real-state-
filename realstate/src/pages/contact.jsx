import  { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from '../assets/R4.jpg';
import image2 from '../assets/R.jpg';
import image3 from '../assets/R2.jpg';

const Contact = () => {
  // Array of background images
  const images = [image1, image2, image3];
  
  // State to track the current background image
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    // Function to change the background image
    const changeImage = () => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    };

    // Set interval to change image every 3 seconds
    const intervalId = setInterval(changeImage, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:500/contact");
      alert("Feedback is submitted successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-full text-[#af8c53] p-4 md:p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20"
        >
      
        <div className="w-full flex justify-center lg:justify-start ">
          <img src={currentImage} alt="random background" className="shadow-lg shadow-black w-[400px] max-w-sm lg:max-w-md rounded-lg h-auto" />
        </div>
        <div className="space-y-8 p-4 lg:p-16 bg-black/85 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-semibold">Lets Talk</h1>
          <form onSubmit={onSubmit} className="space-y-6">
            <textarea
              className="w-full bg-[#252926] text-[#af8c53] p-4 rounded-lg border border-[#af8c53] resize-none"
              rows="4"
              placeholder="Feedback"
              required
            />
            <input
              className="w-full text-[#af8c53] bg-[#252926] border border-[#af8c53] rounded-md p-4"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full text-[#af8c53] bg-[#252926] border border-[#af8c53] rounded-md p-4"
              type="number"
              placeholder="Phone number"
              required
            />
            <button
              className="w-full md:w-1/3 lg:w-1/4 bg-[#af8c53] text-black border border-[#af8c53] rounded-lg p-2 transition duration-300 hover:bg-[#252926] hover:text-green-500"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

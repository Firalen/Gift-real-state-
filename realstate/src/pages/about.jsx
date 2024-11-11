import Item from '../store/item';
import Store from '../store/store';

const About = () => {
  return (
    <>
      <div className="bg-white w-full">
        <h1 className="pt-12 text-4xl text-center text-black font-bold">
          Our Featured Exclusives
        </h1>
        <div className="text-[#af8c53] w-full h-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.isArray(Store) && Store.length > 0 ? (
              Store.map((store) => (
                <div className="flex justify-center text-center" key={store.id}>
                  <Item 
                    img={store.img}
                    text={store.text}
                    text1={store.text1}
                    text2={store.text2}
                    address={store.address}
                    description={store.description}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No properties found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

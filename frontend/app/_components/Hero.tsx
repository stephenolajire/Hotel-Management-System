import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="hero image"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Optional content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Our Hotel
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Experience luxury and comfort in the heart of the city 
          </p>
          <button className="bg-amber-950 hover:bg-amber-700 cursor-pointer text-white h-[48px] w-[180px] rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

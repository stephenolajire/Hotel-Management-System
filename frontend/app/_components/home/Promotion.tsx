import Image from "next/image";
import { Star } from "lucide-react";

const Promotion = () => {
  return (
    <section className="relative w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-5 lg:px-8">
      <div className="relative w-full h-[150px] sm:h-[220px] lg:h-[250px] xl:h-[300px]">
        <Image
          src="/top_2.jpg"
          alt="banner"
          fill
          priority
          className="object-cover object-center rounded-lg"
        />
        <div className="absolute w-full bg-black/20 inset-0 h-full"></div>
        <div className="absolute top-3 sm:top-5 lg:top-7 px-2 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-row justify-between items-center sm:flex-row sm:justify-between w-full">
            <div className="bg-yellow-300 h-[16px] w-[16px] sm:h-[30px] sm:w-[30px] rounded-full flex items-center justify-center">
              <Star className="h-[24px] w-[24px] text-white " />
            </div>
            <div className="bg-amber-900 w-auto text-white p-1 sm:py-2 sm:px-4">
              <p className="text-white text-sm sm:text-xl">
                Valid only from 14 Jan - 20 Jan 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-4">
            <h2 className="text-sm sm:text-3xl text-white">
              Get extra discount at <br /> Steph Hotel
            </h2>
            <h1 className="text-white font-bold mt-0.5 text-xl sm:text-3xl sm:mt-2 lg:mt-3 lg:text-5xl">
              50%
            </h1>
            <p className="text-white text-sm sm:text-2xl sm:mt-2 lg:3xl lg:mt-3">
              Terms and Condition Applied
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[150px] sm:h-[220px] lg:h-[250px] xl:h-[300px]">
        <Image
          src="/top_2.jpg"
          alt="banner"
          fill
          priority
          className="object-cover object-center rounded-lg"
        />
        <div className="absolute w-full bg-black/20 inset-0 h-full"></div>
        <div className="absolute top-3 sm:top-5 lg:top-7 px-2 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-row justify-between items-center sm:flex-row sm:justify-between w-full">
            <div className="bg-yellow-300 h-[16px] w-[16px] sm:h-[30px] sm:w-[30px] rounded-full flex items-center justify-center">
              <Star className="h-[24px] w-[24px] text-white " />
            </div>
            <div className="bg-amber-900 w-auto text-white p-1 sm:py-2 sm:px-4">
              <p className="text-white text-sm sm:text-xl">
                Valid only from 14 Jan - 20 Jan 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-4">
            <h2 className="text-sm sm:text-3xl text-white">
              Get extra discount at <br /> Steph Hotel
            </h2>
            <h1 className="text-white font-bold mt-0.5 text-xl sm:text-3xl sm:mt-2 lg:mt-3 lg:text-5xl">
              50%
            </h1>
            <p className="text-white text-sm sm:text-2xl sm:mt-2 lg:3xl lg:mt-3">
              Terms and Condition Applied
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion

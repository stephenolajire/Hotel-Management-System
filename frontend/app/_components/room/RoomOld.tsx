import Link from "next/link";
import Image from "next/image";

const RoomOld = () => {
  return (
    <div>
      <div className="w-full h-auto">
        <div className="h-auto md:h-[600px] lg:h-[600px] grid grid-cols-1 gap-4 md:gap-0 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div>
            <div className="h-full flex flex-col bg-white px-3 py-3 md:px-8 md:py-8 justify-between rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                Standard Room
              </h3>
              <p className="text-gray-600 text-lg">
                Comfortable and affordable, perfect for short stays.
              </p>
              <div className="">
                <p className="text-gray-500 text-lg mt-2 flex items-center gap-2">
                  Starting from{" "}
                  <span className="text-amber-900 font-semibold text-2xl sm:text-3xl md:text-4xl">
                    $100
                  </span>
                  <span className="text-2xl text-black/50 uppercase font-bold">
                    / night
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-2 items-left">
                <h1 className="uppercase text-lg md:text-xl font-bold text-black/50 ">
                  Status
                </h1>
                <p className="capitalize text-gray-700 lg:text-lg text:sm">
                  Available
                </p>
              </div>
              <div className="grid grid-cols-2 items-left">
                <h1 className="uppercase text-lg md:text-xl font-bold text-black/50 ">
                  Capacity
                </h1>
                <p className="capitalize text-gray-700 lg:text-lg text:sm ">
                  2 People
                </p>
              </div>
              <div className="grid grid-cols-2 items-left">
                <h1 className="uppercase text-lg md:text-xl font-bold text-black/50 ">
                  Size
                </h1>
                <p className="capitalize text-gray-700 lg:text-lg text:sm">
                  30 m²
                </p>
              </div>
              <div className="grid grid-cols-2 items-left">
                <h1 className="uppercase text-lg md:text-xl font-bold text-black/50 ">
                  Bed
                </h1>
                <p className="capitalize text-gray-700 lg:text-lg text:sm">
                  King Size
                </p>
              </div>
              {/* <div className="grid grid-cols-2 items-left">
                    <h1 className="uppercase text-xl font-bold text-black ">
                      Bathroom
                    </h1>
                    <p className="uppercase text-gray-700 text:sm">Private</p>
                  </div>
                  <div className="grid grid-cols-2 items-left">
                    <h1 className="uppercase text-xl font-bold text-black ">
                      Breakfast
                    </h1>
                    <p className="uppercase text-gray-700 text:sm">Included</p>
                  </div>
                  <div className="grid grid-cols-2 items-left">
                    <h1 className="uppercase text-xl font-bold text-black ">
                      Wifi
                    </h1>
                    <p className="uppercase text-gray-700 text:sm">Free</p>
                  </div>
                  <div className="grid grid-cols-2 items-left">
                    <h1 className="uppercase text-xl font-bold text-black ">
                      Air Conditioning
                    </h1>
                    <p className="uppercase text-gray-700 text:sm">Yes</p>
                  </div>
                  <div className="grid grid-cols-2 items-left">
                    <h1 className="uppercase text-xl font-bold text-black ">
                      TV
                    </h1>
                    <p className="uppercase text-gray-700 text:sm">Yes</p>
                  </div> */}
              <div className="w-full flex flex-row items-center gap-4">
                <button className=" w-[50%] hover:cursor-pointer h-[40px] md:h-[48px] bg-amber-900 text-white rounded-full text-center hover:bg-amber-700 transition-colors duration-300 mt-4">
                  Book Now
                </button>
                <div>
                  <Link
                    className="text-gray-700 underline text-lg"
                    href="/room"
                  >
                    More details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-[600px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/room_1.jpg"
              alt="Room Image 1"
              fill
              priority
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomOld;

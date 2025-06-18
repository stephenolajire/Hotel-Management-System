import Image from "next/image";
import Hero from "../_components/Hero";
import Link from "next/link";
import { MoveRight, Star } from "lucide-react";
import RoomSection from "../_components/RoomSection";
import TopRoomSection from "../_components/TopRoomSection";

export default function HomePage() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-semibold mb-3">
            Discover our rooms
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Explore our range of property types for every travelers
          </p>
        </div>
        <section className="h-auto flex flex-row gap-3 sm:gap-4 lg:gap-5 w-full overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-8 hide-scrollbar">
          <RoomSection />
          <RoomSection />
          <RoomSection />
          <RoomSection />
          <RoomSection />
          <RoomSection />
        </section>
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-3 pt-8">
          <div className="">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-bold">
              Most booked rooms
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl mt-2 mb-1">
              Explore our most booked room by travelers
            </p>
          </div>
          <div className="flex flex-row justify-between h-auto w-full">
            <div></div>
            <div>
              <Link
                className="text-amber-900 text-lg sm:text-xl flex flex-row items-center gap-1.5"
                href="/top-room"
              >
                See All{" "}
                <span>
                  <MoveRight size={24} className="text-inherit" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <section className="h-auto flex flex-row gap-3 sm:gap-4 lg:gap-5 w-full overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-8 hide-scrollbar">
          <TopRoomSection />
          <TopRoomSection />
          <TopRoomSection />
          <TopRoomSection />
          <TopRoomSection />
          <TopRoomSection />
          <TopRoomSection />
        </section>

        <div className="w-full px-4 sm:px-5 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-bold">
            Get promo on room
          </h1>
        </div>
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
        <section className="px-4 sm:px-6 lg:px-8 py-8"></section>
      </main>
    </div>
  );
}

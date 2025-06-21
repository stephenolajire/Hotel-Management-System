import Image from "next/image";
import Hero from "../_components/home/Hero";
import Link from "next/link";
import { MoveRight, Star } from "lucide-react";
import RoomSection from "../_components/home/RoomSection";
import TopRoomSection from "../_components/home/TopRoomSection";
import Promotion from "../_components/home/Promotion";

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
        <Promotion/>
        {/* <section className="px-4 sm:px-6 lg:px-8 py-8"></section> */}
      </main>
    </div>
  );
}

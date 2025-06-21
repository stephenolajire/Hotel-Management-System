import Image from "next/image";
import Link from "next/link";
import { MoveRight, Star } from "lucide-react";

const TopRoomSection = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-[250px] sm:w-[260px] sm:h-[200px] lg:w-[280px] xl:w-[360px] xl:h-[250px] lg:h-[250px] rounded-lg mt-3 h-auto">
        <div className="relative w-[250px] sm:w-[260px] sm:h-[200px] lg:w-[280px] xl:w-[360px] xl:h-[250px] lg:h-[250px] h-[180px] rounded-lg mt-3">
          <Image
            src="/top_2.jpg"
            alt="top room"
            fill
            priority
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className="w-[full] mt-3">
          <p className="text-xl text-gray-700 font-bold capitalize">standard</p>
          <p className="text-gray-700 mt-2">Jute jay room</p>
          <div className="flex flex-row items-center gap-3 mt-1">
            <div className="flex flex-row items-center gap-3">
              <Star className="h-[24px] w-[24px] text-gray-700" />
              <span className="text-gray-700">4.9</span>
            </div>
            <span className="text-gray-700">(893 reviews)</span>
          </div>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl mt-3 text-gray-700 font-bold">
            $250
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopRoomSection;

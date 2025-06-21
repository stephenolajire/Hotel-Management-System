import { Home, MoveRight } from "lucide-react";
import Image from "next/image";
const RoomSection = () => {
  return (
    <section className="w-full h-auto ">
      {/* Room categories */}
      <div className="relative w-full h-auto ">
        <div className="flex items-center flex-row justify-between h-[50px]">
          <div className="w-auto h-auto">
            <p className="text-gray-700 text-xl font-bold">Standard</p>
            <div className="flex flex-row gap-2 mb-1 mt-1 items-end">
              <Home size={24} color="#374151" className="" />
              <span className="text-sm sm:text-base text-gray-700">
                12,000 available
              </span>
            </div>
          </div>
          <div className="h-[32px] w-[32px] sm:w-[50px] sm:h-[50] border border-gray-500 flex items-center justify-center rounded-xl">
            <MoveRight size={20} className="sm:w-6 sm:h-6 text-inherit" />
          </div>
        </div>
        <div className="relative w-[200px] sm:w-[220px] sm:h-[220px] lg:w-[250px] xl:w-[360px] xl:h-[250px] lg:h-[250px] h-[150px] rounded-lg mt-3">
          <Image
            src="/room_1.jpg"
            fill
            alt="room image"
            priority
            className="object-cover object-center rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
};

export default RoomSection;

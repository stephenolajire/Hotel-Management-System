import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const TopRoomSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-[200px] sm:w-[220px] sm:h-[220px] lg:w-[250px] xl:w-[360px] xl:h-[200px] lg:h-[250px] h-[150px] ">
        <div className="w-full h-full relative rounded-2xl">
          <Image
            src="/top_2.jpg"
            alt="top room"
            fill
            priority
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default TopRoomSection;

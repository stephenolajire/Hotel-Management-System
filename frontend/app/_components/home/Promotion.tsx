import Image from "next/image";
import { Star } from "lucide-react";

const Promotion = () => {
  return (
    <section className="relative w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-5 lg:px-8">
      <div className="relative w-full h-[30vh] sm:h-[60vh]">
        <Image
          src="/contact.jpg"
          alt="promotion"
          fill
          priority
          className="object-cover object-center rounded-lg"
        />
      </div>
      <div className="w-full h-auto flex flex-col items-start justify-center p-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
          Special Promotion
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Enjoy our exclusive promotion with a 20% discount on all bookings made
          this month!
        </p>
        <div className="flex items-center gap-2 mb-4">
          <Star className="h-[24px] w-[24px] text-yellow-500" />
          <span className="text-gray-700">Rated 4.9/5 by our guests</span>
        </div>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Book now and experience luxury at an unbeatable price!
        </p>
      </div>
    </section>
  );
}

export default Promotion

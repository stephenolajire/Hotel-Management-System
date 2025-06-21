import Image from 'next/image'
import Link from 'next/link';

const RoomHero = () => {
  return (
    <div>
      <div className="w-full h-[60vh] relative">
        <Image
          src="/top_2.jpg"
          alt="Room Hero Image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Our Rooms
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl">
              Experience comfort and luxury like never before
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomHero

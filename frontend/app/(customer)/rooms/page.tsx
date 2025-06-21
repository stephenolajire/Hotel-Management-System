import RoomHero from "@/app/_components/room/RoomHero"
import RoomList from "@/app/_components/room/RoomList"
import RoomOld from "@/app/_components/room/RoomOld";
const page = () => {
  return (
    <main>
      <RoomHero />
      <div>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-semibold mb-3">
            Explore Our Rooms
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            Discover a range of rooms tailored for every traveler
          </p>
        </div>
      </div>
      <section>
        <RoomList />
        <RoomOld />
        <RoomList />
        <RoomOld />
        <RoomList />
      </section>
    </main>
  );
}

export default page

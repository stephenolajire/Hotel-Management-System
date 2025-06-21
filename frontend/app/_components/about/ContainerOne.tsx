import Image from "next/image"

const ContainerOne = () => {
  return (
    <div className="w-full pb-4 md:pb-0 h-auto md:h-[60vh] bg-gray-100 rounded-lg relative flex flex-col gap-4 md:flex md:flex-row items-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-15">
      <div className="w-full md:w-[50%] h-full flex flex-col items-start justify-center">
        <h1 className="py-4 md:py-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700">
          Our way of being
        </h1>
        <p className="text-base md:text-xl text-gray-600 mt-1 md:mt-4">
          At StephDev Hotel Group we strive to be the first choice in the mind
          of guests, owners and talent. In our journey to achieve this, we
          practice strong beliefs and actions that respect the diversity of
          people, the community, ethics and the planet.
        </p>
      </div>
			<div className="w-full md:w-[40%] h-[40vh] relative pb-4 md:pb-0">
				<Image
					src="/top_2.jpg"
					alt="About Image"
					fill
					priority
					className="object-cover object-center rounded-b-lg"
				/>
			</div>
    </div>
  );
}

export default ContainerOne

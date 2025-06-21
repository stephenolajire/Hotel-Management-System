import Image from "next/image";
import Link from "next/link";

const MapAddress = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-15">
        <div className="relative w-full h-[30vh] md:h-[60vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x1234567890abcdef!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full h-auto md:h-[60vh] flex items-center">
          <div className="w-full h-auto md:h-[60vh] flex flex-col items-start justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
              Visit Us
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              We are located at 123 Main Street, Anytown, USA. Feel free to
              visit us during our business hours.
            </p>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              <strong>Business Hours:</strong> Monday - Friday, 9 AM - 5 PM
            </p>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              <strong>Email: stephdev-hotel@gmail.com</strong>
              <Link
                href="mailto:horlharmighty2000@gmail.com"
                className="text-blue-500 hover:underline"
              ></Link>
            </p>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              <strong>Follow us on:</strong>
              <Link
                href="https://www.facebook.com"
                className="text-blue-500 hover:underline ml-2"
              >
                Facebook
              </Link>
              <Link
                href="https://www.twitter.com"
                className="text-blue-500 hover:underline ml-2"
              >
                Twitter
              </Link>
              <Link
                href="https://www.instagram.com"
                className="text-blue-500 hover:underline ml-2"
              >
                Instagram
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAddress;

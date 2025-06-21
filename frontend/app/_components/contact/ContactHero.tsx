// import React from 'react'
import Image from "next/image";

const ContactHero = () => {
  return (
    <div className="w-full h-[60vh]">
      <div className="w-full h-full relative">
        <Image
          src="/contact.jpg"
          alt="Contact Hero Image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl">
              We are here to assist you with any inquiries or support you need
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

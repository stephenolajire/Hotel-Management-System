"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonies = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      text: "The stay was absolutely wonderful! The staff were incredibly friendly and attentive, and the room was immaculate with stunning city views. Every detail was perfect - from the luxurious bedding to the complimentary breakfast. Highly recommend this place for anyone looking for a premium experience!",
      image: "/contact.jpg",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "A perfect getaway! The amenities were absolutely top-notch - the spa, fitness center, and rooftop pool exceeded all expectations. The location was ideal for exploring the city, with easy access to all major attractions. The concierge service was exceptional and helped make our trip unforgettable.",
      image: "/contact.jpg",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "Exceptional service and a beautiful room with breathtaking ocean views! The attention to detail was remarkable - from the welcome amenities to the turndown service. The restaurant on-site served incredible cuisine, and the staff went above and beyond to accommodate our special requests. I will definitely be returning!",
      image: "/contact.jpg",
      date: "January 2024",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "Outstanding hospitality and world-class facilities! The room was spacious, elegantly designed, and equipped with all modern amenities. The business center was perfect for my work needs, and the evening entertainment was delightful. This hotel truly sets the standard for luxury accommodation.",
      image: "/contact.jpg",
      date: "April 2024",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of guests choose us for their perfect getaway
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-100 leading-relaxed font-light italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-300">
                        {testimonials[currentTestimonial].location}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      priority
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-sm text-center">
                    <div className="text-2xl">★</div>
                    <div>{testimonials[currentTestimonial].rating}.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-white shadow-lg scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "10,000+", label: "Happy Guests" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "95%", label: "Return Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

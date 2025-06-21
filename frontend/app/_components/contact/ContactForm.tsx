import Image from "next/image"

const ContactForm = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-15">
      <div className="w-full h-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
            Love to hear from you Get intouch!
        </h1>
        <div>
            <form className="flex flex-col gap-4 md:gap-8">
                <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
                <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
                <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 h-32 resize-none"
                ></textarea>
                <button
                type="submit"
                className="bg-amber-900 text-white p-3 rounded-lg hover:bg-amber-700 transition duration-200"
                >
                Send Message
                </button>
            </form>
        </div>
      </div>
      <div className="relative w-full h-[30vh] md:h-auto">
        <Image
          src='/contact.jpg'
          alt="contact us"
          fill
          priority
          className="object-cover object-center rounded-lg"
        />
      </div>
    </div>
  )
}

export default ContactForm

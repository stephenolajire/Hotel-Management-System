import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full h-auto bg-black pb-5 mt-4">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row lg:justify-between xl:flex-row xl:justify-between sm:justify-between px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full h-auto">
          <Image
            className=" h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] rounded-full"
            src="/hero.jpg"
            alt="hotel logo"
            height={50}
            width={50}
          />
          <p className="text-white text-2xl font-bold mt-1.5 mb-2">
            Steph Hotel
          </p>
          
        </div> <br />
        <div className="w-full h-auto">
          <div className="w-auto">
            <h5 className="text-white text-[16px] sm:text-2xl ">Link</h5>
            <div className="text-white w-[50px] h-[2px] bg-white"></div>
          </div>{" "}
          <br />
          <div className="flex flex-col">
            <Link className="text-white text-[16px] sm:text-md block" href="/">
              Home
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/about"
            >
              About
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/contact"
            >
              Contact Us
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/rooms"
            >
              Rooms
            </Link>
          </div>
        </div> <br />
        <div className="w-full h-auto">
          <div className="w-auto">
            <h5 className="text-white text-[16px] sm:text-2xl ">Link</h5>
            <div className="text-white w-[50px] h-[2px] bg-white"></div>
          </div>{" "}
          <br />
          <div className="flex flex-col">
            <Link className="text-white text-[16px] sm:text-md block" href="/">
              Home
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/about"
            >
              About
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/contact"
            >
              Contact Us
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/rooms"
            >
              Rooms
            </Link>
          </div>
        </div> <br />
        <div className="w-full h-auto">
          <div className="w-auto">
            <h5 className="text-white text-[16px] sm:text-2xl ">Link</h5>
            <div className="text-white w-[50px] h-[2px] bg-white"></div>
          </div>{" "}
          <br />
          <div className="flex flex-col">
            <Link className="text-white text-[16px] sm:text-md block" href="/">
              Home
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/about"
            >
              About
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/contact"
            >
              Contact Us
            </Link>{" "}
            <br />
            <Link
              className="text-white text-[16px] sm:text-md block"
              href="/rooms"
            >
              Rooms
            </Link>
          </div>
        </div> <br />
      </div>
      <hr className="text-white" />
      <div className="mt-2 w-full h-auto flex items-center justify-center">
        <p className="text-white text-sm  mt-2">
          Copyright All right reserved by Stephen {date}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

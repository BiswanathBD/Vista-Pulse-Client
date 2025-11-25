import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaEnvelope,
  FaUserShield,
  FaFileContract,
  FaQuestionCircle,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pt-10">
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <div className="logo flex flex-col text-left">
            <div className="logo py-1 flex flex-col text-right pl-4 w-fit">
              <h3 className="text-3xl font-extrabold!">vista</h3>
              <p className="text-[10px] pr-1 -mt-1">-- P U L S E</p>
            </div>
            <p className="text-sm text-gray-500 mt-4 max-w-xs">
              Explore inspiring stories on travel, food, lifestyle & wellness.
            </p>
          </div>

          {/* footer links with icons */}
          <div className="flex flex-wrap gap-8 md:gap-32 text-gray-400 text-sm font-medium">
            <div className="flex flex-col gap-2">
              <Link
                href={"/"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaHome /> Home
              </Link>
              <Link
                href={"/about"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaInfoCircle /> About Us
              </Link>
              <Link
                href={"/blogs"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaBlog /> Blogs
              </Link>
              <Link
                href={"/"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaEnvelope /> Contact
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href={"/privacy"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaUserShield /> Privacy Policy
              </Link>
              <Link
                href={"/terms"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaFileContract /> Terms & Conditions
              </Link>
              <Link
                href={"/faq"}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaQuestionCircle /> FAQ
              </Link>
            </div>
          </div>

          {/* social icons */}
          <div>
            <h3 className="text-xl font-semibold py-2 px-4 my-2 border-b border-white/10">Social Links</h3>
            <div className="flex gap-4 text-xl justify-center">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-10 mb-2 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} VistaPulse — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

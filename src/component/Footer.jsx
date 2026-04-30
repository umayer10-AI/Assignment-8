import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="mt-12 border-t" />

      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="flex justify-center">
            <div className="space-y-4">
            <div className="flex items-center gap-1">

              <h2 className="text-4xl">🐄</h2>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              QurbaniHat is a modern livestock booking platform that helps you 
              easily choose and order animals for Qurbani with trust and convenience.
            </p>
          </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              About
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-black dark:hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-black dark:hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-black dark:hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <MdEmail /> support@qurbanihat.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +880 1234-567890
              </li>
              <li className="flex items-center gap-2">
                <MdLocationOn /> Dhaka, Bangladesh
              </li>
            </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white text-center">
              Follow Us
            </h3>

            <div className="flex justify-center gap-4 text-lg">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaGithub /></Link>
              <Link href="#"><FaLinkedin /></Link>
            </div>

            <div className="flex justify-center">
              <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-linear-to-r from-green-500 via-blue-500 to-green-600 text-white 
              text-sm font-medium hover:scale-[1.02] transition"
            >
              Get Started
            </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
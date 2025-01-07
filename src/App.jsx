import React from "react";
import Navbar from "./components/Navbar";
import menuItems from "./constants/Navbar";
import zysk from "./assets/zysk.png";
import profile from "./assets/profile.png";
import image1 from "./assets/image1.png";
import { ChevronRight, Play } from "lucide-react";
import boltshift from "./assets/boltshiftlogo.png";
import lightbox from "./assets/lightbox.png";
import featherdev from "./assets/featherdevlogo.png";
import spherule from "./assets/spherule.png";
import globalbank from "./assets/globalbank.png";
import Nietzsche from "./assets/nietzsche.png";
import CompanyLogos from "./components/Logos";
import FeaturesGrid from "./components/Features";
import Logomark from "./assets/Logomark.png";
import Avatar from "./assets/Avatar.png";
import { FAQ, faqItems } from "./components/FAQ";
import image from "./assets/1.png";
import image2 from "./assets/2image.png";
import image3 from "./assets/3.png";
import { BlogPostCard, blogPosts } from "./components/Card";
import Footer from "./components/Footer";

const companies = [
  { name: "Boltshift", logo: boltshift },
  { name: "Lightbox", logo: lightbox },
  { name: "FeatherDev", logo: featherdev },
  { name: "Spherule", logo: spherule },
  { name: "GlobalBank", logo: globalbank },
  { name: "Nietzsche", logo: Nietzsche },
];

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-x-hidden">
      <div className="w-full flex justify-center items-center">
        <Navbar logo={zysk} menuItems={menuItems} profileImage={profile} />
      </div>

      <div className="pt-16 md:pt-24 flex flex-col justify-center items-center w-full px-4">
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center text-center px-4 md:px-8 gap-8">
          <button className=" flex flex-row flex-nowrap items-center gap-2 rounded-full bg-red-50 px-3 py-1 border border-red-300">
            <span className="text-red-500 text-[12px] md:text-sm font-medium rounded-full bg-red-50 border border-red-400 px-2 py-0.5">
              New feature
            </span>
            <span className="text-red-500 text-[12px] md:text-sm">
              Check out the team dashboard
            </span>
            <ChevronRight className="w-4 h-4 text-red-500" />
          </button>
          <h1 className="text-[#101828] text-3xl md:text-5xl font-semibold">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-base md:text-xl font-normal text-[#475467] max-w-[768px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <button className="w-full md:w-auto inline-flex items-center justify-center h-[48px] gap-2 rounded-full border border-gray-200 text-gray-700 px-4 py-2">
              <Play className="w-4 h-4" />
              <span className="font-semibold">Demo</span>
            </button>
            <button className="w-full md:w-auto h-[48px] rounded-full bg-red-500 text-white hover:bg-red-600 font-medium px-4 py-2">
              Sign up
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1216px] md:h-[560px] flex justify-center items-center overflow-hidden border-[#101828] border-4 md:border-8 rounded-lg md:border-b-0 mt-8">
          <img
            src={image1}
            alt="Feature"
            className="w-full h-auto md:max-w-[1216px] md:h-[560px]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-[1280px] py-[48px] md:py-[96px] px-4">
        <CompanyLogos companies={companies} />
      </div>

      <div className="flex flex-col justify-center items-center py-[64px] md:py-[96px] gap-[48px] md:gap-[64px] w-full px-4">
        <div className="flex flex-col justify-center items-center max-w-[768px] text-base text-center gap-[20px] leading-normal">
          <p className="text-[#E63F3A] font-semibold text-[16px]">Features</p>
          <h1 className="text-[30px] md:text-[36px] font-semibold">
            Analytics that feels like it’s from the future
          </h1>
          <p className="text-[16px] md:text-[20px] font-normal text-[#475467]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="w-full max-w-[1280px] flex justify-center items-center">
          <FeaturesGrid />
        </div>
      </div>

      <div className="py-[64px] md:py-[96px] w-full bg-[#F9FAFB]">
        <div className="max-w-7xl flex flex-col justify-center items-center mx-auto px-[32px] text-center">
          <div className="flex justify-center gap-2 items-center mb-8">
            <img src={Logomark} className="w-[24.17px] h-[40px]" />
            <span className="font-semibold text-3xl ">Sisyphus</span>
          </div>

          <h1 className="text-[30px] font-[500] md:text-[48px] md:font-[600]  mb-8">
            "We've been using Untitled to kick start every new project and can't
            imagine working without it."
          </h1>

          <div className="flex flex-col items-center text-center gap-[16px] justify-center">
            <img
              src={Avatar}
              alt="Candice Wu"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="text-center">
              <div className="font-[600] text-[18px] text-[#101828]">
                Candice Wu
              </div>
              <div className=" text-[#475467] text-[16px] font-[400]">
                Product Manager, Sisyphus
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[64px] md:py-[96px] w-full flex flex-col justify-center items-center gap-[48px] md:gap-[64px]">
        <div className="w-full flex flex-col justify-center items-center text-center gap-[20px]">
          <h2 className="text-[36px] font-[600]">Frequently asked questions</h2>
          <p className="text-[20px] font-[400] text-[#475467]">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <FAQ items={faqItems} />
        </div>

        <div className="bg-[#F9FAFB] w-full md:w-[1216px] py-12 px-4">
          <div className="flex flex-col text-center md:gap-[32px] gap-[24px] py-[16px] md:py-[32px]">
            <div className="flex relative justify-center">
              <img
                src={image}
                alt="Team member 1"
                className="w-10 h-10 rounded-full border-2 border-white relative z-10"
              />
              <img
                src={image2}
                alt="Team member 2"
                className="w-12 h-12 rounded-full border-2 border-white relative z-20 -ml-4 -top-2"
              />
              <img
                src={image3}
                alt="Team member 3"
                className="w-10 h-10 rounded-full border-2 border-white relative z-10 -ml-4"
              />
            </div>
            <div className="gap-[8px] flex flex-col">
              <h3 className="text-[20px] font-[600]">Still have questions?</h3>
              <p className="text-[18px] font-[400]">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
            </div>

            <div>
              <button className="bg-[#E63F3A] font-semibold text-md text-white px-[20px] py-[12px] rounded-md hover:bg-red-600 transition-colors duration-200">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center py-[64px] md:py-[96px] gap-[48px] md:gap-[64px]">
        <div className="w-full max-w-[1216px] px-4 md:px-0 flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex flex-col gap-4 md:gap-6 items-start">
            <h4 className="font-semibold text-[16px] text-[#E63F3A]">
              Our blog
            </h4>
            <h1 className="font-semibold text-[28px] md:text-[36px] text-[#101828]">
              Latest blog posts
            </h1>
            <p className="font-normal text-[18px] md:text-[26px] text-[#475467]">
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>

          <div className="hidden md:flex">
            <button className="px-6 py-3 bg-[#E63F3A] cursor-pointer rounded-lg md:w-[148px] md:h-[48px] flex justify-center items-center text-md font-semibold text-white">
              View all Posts
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>

        <div className="flex md:hidden w-full px-4 mt-8">
          <button className="px-6 py-3 bg-[#E63F3A] rounded-lg w-full cursor-pointer flex justify-center items-center text-md font-semibold text-white">
            View all Posts
          </button>
        </div>
      </div>

      <div className="bg-[#F9FAFB] w-full py-12 px-4">
        <div className="flex flex-col text-center gap-[48px] md:[32px] md:px-[32px] py-[16px] md:py-[32px]">
          <div className="gap-[8px] flex flex-col">
            <h3 className="text-[36px] text-[#101828] font-[600]">Start your free trial</h3>
            <p className="text-[20px] font-[400] text-[#475467]">
            Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-[12px] gap-[8px] w-full">
            <button className="w-full md:w-auto text-[#344054] border-[1px] border-[#D0D5DD] font-[600] text-[16px] px-[20px] py-[12px] rounded-md hover:bg-red-600 transition-colors duration-200">
              Learn more
            </button>
            <button className="w-full md:w-auto bg-[#E63F3A] text-white font-[600] text-[16px] px-[20px] py-[12px] rounded-md hover:bg-red-600 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default App;

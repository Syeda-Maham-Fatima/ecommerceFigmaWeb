"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "pic4.png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "pic5.png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "pic6.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "pic7.png",
    },
  ];
  const products2 = [
    {
      id: 5,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "pic9.png",
    },
    {
      id: 6,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "pic10.png",
    },
    {
      id: 7,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "pic11.png",
    },
  ];

  return (
    <div>
      <div className="bg-[#FBEBB5] w-full h-auto">
        {/* Text Section */}
        <div className="flex flex-col items-center sm:items-start sm:absolute sm:top-[328px] sm:left-[202px] text-center sm:text-left">
          <p className="text-[36px] mt-16 sm:w-[440px] sm:h-[192px] sm:text-[64px] font-[500] leading-[48px] sm:leading-[86px]">
            Rocket single seater
          </p>
        </div>

        {/* Shop Now Section */}
        <div className="flex flex-col items-center sm:items-start sm:absolute sm:top-[600px] sm:left-[206px] mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-[20px] sm:text-[24px] font-[500] leading-[28px] sm:leading-[36px] transition-transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-8 sm:mt-0">
          <Image
            src="/pic1.png"
            alt="Hero Image"
            width={803}
            height={1000}
            className="w-[60%] sm:w-[52%] ml-9 sm:ml-[690px] object-cover"
          />
        </div>
      </div>

      {/* view more section */}

      <div className="w-full h-auto bg-[#FAF4F4] py-10">
        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 max-w-7xl">
          {/* First Image Section */}
          <div className="flex flex-col items-center">
            <Image
              src="/pic2.png"
              alt="Side Table 1"
              width={605}
              height={562}
              className="mr-28 cursor-pointer transition-transform hover:scale-105"
            />
            <div className="sm:mr-32 sm:-mt-20">
              <p className="font-[500] text-[24px] md:text-[36px] leading-[36px] md:leading-[54px]">
                Side Table
              </p>
              <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
                View More
              </p>
            </div>
          </div>

          {/* Second Image Section */}
          <div className="flex flex-col items-center">
            <Image
              src="/pic3.png"
              alt="Side Table 2"
              width={605}
              height={562}
              className="mr-28 cursor-pointer transition-transform hover:scale-105"
            />
            <div className="sm:mr-32 sm:-mt-20">
              <p className="font-[500] text-[24px] md:text-[36px] leading-[36px] md:leading-[54px]">
                Side Table
              </p>
              <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
                View More
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top picks */}

      <div className="w-full h-auto bg-white py-12 sm:ml-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-[500] text-[36px] leading-[54px]">
            Top Picks For You
          </p>
          <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] mt-5 max-w-2xl">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
            View More
          </p>
        </div>
      </div>

      {/* new arrivals */}

      <div className="bg-[#FFF9E5] w-full h-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={"/pic8.png"}
              alt="pic8"
              width={983}
              height={799}
              className="w-full  object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center sm:pt-32 mt-6 lg:px-10">
            <div className="mb-6">
              <p className="font-[500] text-[24px] leading-[36px]">
                New Arrivals
              </p>
              <p className="font-[700] text-[36px] md:text-[48px] leading-[48px] md:leading-[72px]">
                Asgaard Sofa
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/Shop/ProductDetails"
                className="text-[16px] md:text-[20px] leading-[28px] font-[500] text-[#000000] border border-[#9b9b9b] py-3 px-6 inline-block hover:bg-[#faeec7] transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* our blog  */}

      <div className="w-full h-auto bg-white py-12 sm:ml-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-[500] text-[36px] leading-[54px]">Our Blogs</p>
          <p className="text-[#9F9F9F] font-[500] text-[16px] leading-[24px] mt-4">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 ">
            {products2.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[20px] transition-transform hover:scale-105 hover:text-gray-700">
            View All Post
          </p>
        </div>
      </div>

      {/* contact to instagram   */}

      <div className="relative w-full h-auto">
        {/* Image Section */}
        <div className="w-full h-[450px]">
          <Image
            src={"/pic12.png"}
            alt="pic12"
            width={1440}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[90px]">
              Our Instagram
            </p>
            <p className="font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]">
              Follow our store on Instagram
            </p>
          </div>
          <div>
            <button className="w-[200px] h-[50px] md:w-[255px] md:h-[64px] rounded-full bg-white transition-transform hover:scale-105 text-black font-[500] text-[16px] md:text-[20px] drop-shadow-lg">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

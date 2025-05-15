import CustomSelect from "@/components/CustomSelect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { shippingOptions, sizeOptions } from "@/constants";
import Image from "next/image";
import React from "react";
import { LuTruck } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import Rating from "@/components/Rating";
import { AiOutlineLike, AiTwotoneDislike } from "react-icons/ai";
import ProductCommend from "@/components/Product/ProductCommend";

const SingleProductPage = () => {
  return (
    <div className="w-full py-28 bg-zinc-200 min-h-screen">
      <div className="grid grid-cols-4 gap-3 p-3">
        <div className="w-full h-full col-span-4 lg:col-span-2 ">
          <div>
            <h2 className="text-5xl font-bold ">
              BEST POSTER HAVE SEEN IN YOUR LIFE
            </h2>
            <Rating />
          </div>
          <div className="w-full  md:w-[80%]">
            <p className="text-base font-medium text-gray-600">Subtitle</p>
            <div className="mt-5 lg:mt-3 text-zinc-700  ">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptates est mollitia minima nam itaque quidem dolores unde
                facilis ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptates est mollitia minima nam itaque quidem dolores unde
                facilis ipsa!
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <CustomSelect
                title={"size"}
                defaultValue={"small  "}
                label={"Size"}
                placeholder={"small"}
                options={sizeOptions}
              />
              <CustomSelect
                title={"Shipping"}
                defaultValue={"post"}
                label={"Shipping"}
                placeholder={"post"}
                options={shippingOptions}
              />
            </div>
            <div className="flex items-center mt-4 gap-3">
              <Checkbox />
              <Label>I agree all roles.</Label>
            </div>

            <div className="flex flex-wrap items-center gap-4 *:border-r-2  *:md:border-r-0 *:md:border-r-zinc-400 *:last:border-r-0 mt-5">
              <div className="flex items-center gap-2 px-3 py-2 text-sm flex-1">
                <IoLockClosedOutline size={28} />
                Secure payment method
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm flex-1">
                <LuTruck size={28} />
                Fast delivery time in iran.
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm flex-1">
                <MdOutlineLocalOffer size={28} />
                Get offer for next order
              </div>
            </div>

            <Button className="w-full py-6 text-white mt-4" variant={"default"}>
              Purchase
            </Button>
          </div>
        </div>

        {/* image */}
        <div className="w-full h-full  lg:col-span-2 col-span-4 p-3  bg-white  rounded-xl">
          <div className="relative h-[400px] lg:h-[75dvh] w-full ">
            <Image
              src="/poster.webp"
              alt="product image"
              fill
              sizes="fill"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* commends */}
      <div className=" mt-16 w-full p-3">
        <h3 className="text-2xl font-semibold mb-10">Commends</h3>
        <ProductCommend />
      </div>
    </div>
  );
};

export default SingleProductPage;

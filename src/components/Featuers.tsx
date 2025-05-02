import { features } from '@/constants';
import Image from 'next/image';
import React from 'react'

const Featuers = () => {
  return (
    <div className="w-full max-w-[96%]   mx-auto min-h-[100dvh] relative mt-20">
        <Image
          src="/banner.jpg"
          alt=""
          fill
          sizes="fill"
          className="object-cover rounded-xl w-full h-full"
        />

        <div className="absolute bottom-5 left-0 w-full flex flex-nowrap items-center gap-3">
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="p-1 flex-1 bg-red-200/10 background-blur h-full flex items-center rounded-full justify-between "
              >
                <h4 className="mx-4 capitalize text-white  text-lg font-bold  ">
                  {feature.title}
                </h4>
                <div
                  style={{ backgroundColor: feature.bgColor }}
                  className=" w-[70px] h-[70px] rounded-full  flex items-center justify-center"
                >
                  <div className="text-white text-base font-bold ">
                    {feature.icon ? <feature.icon size={24} /> : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Featuers
import Image from "next/image";
import { LuDollarSign, LuFlower } from "react-icons/lu";
import { FaBrush } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="px-5 h-[100dvh] w-full overflow-hidden py-28 bg-zinc-200 relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.jpg"
          fill
          sizes="fill"
          alt="hero-image"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute top-[20%] right-[10%]">
        <div className="flex w-fit items-center gap-1 background-blur p-1.5 bg-white/30 rounded-full">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white">
            <FaBrush size={20} className="text-orange-500" />
          </div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-500 -ml-3">
            <LuDollarSign size={20} color="white" fontWeight={800} />
          </div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white -ml-3">
            <LuFlower className="text-orange-500" size={20} />
          </div>
        </div>
        <h3 className="text-white text-2xl font-medium ml-2 mt-2">
          SAY HELLO TO <br />
          NEW ACCESSORIIES <br /> FOR YOUR ROOM.
        </h3>
      </div>
    </div>
  );
};

export default HomePage;

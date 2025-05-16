import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Card from "./Card";
import { tempCards } from "@/constants";

const CardList = () => {
  return (
    <div className="w-full min-h-[100dvh] max-w-[96%] mx-auto ">
      <div className="flex items-center justify-between w-full my-20 ">
        <h4 className="text-3xl capitalize">
          <span className="font-bold ">100% </span>handmade art. <br />
          Created by passionate artists.
        </h4>

        <div className="text-5xl leading-12 font-extrabold tracking-tighter relative">
          <div className="mb-1">
            <h2 className=" text-white z-50 bg-red-400 w-fit p-2 rounded-md">
              CURATED ART
            </h2>
            <div className="absolute border bg-zinc-100/70 w-[330px] h-14 border-zinc-700 top-4 rounded-md -left-2 -z-10" />
          </div>

          <h2>
            FOR A HOME THAT <br /> SPEAKS YOUR STYLE
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center justify-center p-6 cursor-pointer rounded-full border border-zinc-400">
            <FaLongArrowAltLeft />
          </button>
          <button className="flex items-center justify-center p-6 cursor-pointer rounded-full border border-zinc-400">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-y-14 gap-5 h-full">
        {tempCards.map((card) => (
          <Card card={card} key={card.id} type="secondary" />
        ))}
      </div>
    </div>
  );
};

export default CardList;

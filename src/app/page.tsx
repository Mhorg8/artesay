import Card from "@/components/Card";
import CardList from "@/components/CardList";
import Hero from "@/components/Hero";
import { offers } from "@/constants";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="p">
      <Hero />
      <CardList />

      <div className="w-full max-w-[96%] bg-green-400 mx-auto h-[100dvh] relative ">
        <Image
          src="/banner.jpg"
          alt=""
          fill
          sizes="fill"
          className="object-cover rounded-xl"
        />

        <div className="absolute bottom-5 left-0 w-full flex flex-nowrap items-center gap-3">
          {offers.map((offer) => {
            return (
              <div
                key={offer.id}
                className="p-1 flex-1 bg-red-200/10 background-blur  h-full flex items-center rounded-full justify-between "
              >
                <h4 className="mx-4 text-white  text-xl font-bold  ">
                  {offer.title}
                </h4>
                <div
                  style={{ backgroundColor: offer.bgColor }}
                  className=" w-[70px] h-[70px] rounded-full  flex items-center justify-center"
                >
                  <p className="text-white text-base font-bold">
                    {offer.icon ? <offer.icon size={22} /> : null}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

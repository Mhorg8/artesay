import CardList from "@/components/CardList";
import Featuers from "@/components/Featuers";
import Hero from "@/components/Hero";
import { features } from "@/constants";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-full">
      <Hero />
      <CardList />
      <Featuers />
    </div>
  );
};

export default HomePage;

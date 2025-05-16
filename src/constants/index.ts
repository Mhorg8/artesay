import {
  MdOutlineLocalOffer,
  MdLockOutline,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { CardType, Shipping, Size } from "../types";

export const navLinks = [
  {
    id: 2,
    path: "/posters",
    title: "posters",
  },
  { id: 3, path: "/albums", title: "albums" },
];

export const features = [
  {
    id: 1,
    title: "New year off",
    icon: BsBox,
    bgColor: "#ff6467",
  },
  { id: 2, title: "Flash sale", icon: MdOutlineLocalOffer, bgColor: "#ff8904" },
  {
    id: 11,
    title: "Fast delivery",
    icon: GiCommercialAirplane,
    bgColor: "#c27aff",
  },
  {
    id: 13,
    title: "safe",
    icon: MdLockOutline,
    bgColor: "oklch(85.2% 0.199 91.936)",
  },
  { id: 4, title: "Trends", icon: GrFavorite, bgColor: "#fb64b6" },
  { id: 5, title: "SUPPORT", icon: MdOutlineSupportAgent, bgColor: "#05df72" },
];

export const sizeOptions: Size[] = [
  { id: 1, value: "small", name: "small" },
  { id: 2, value: "medium", name: "medium" },
  { id: 3, value: "large", name: "large" },
];

export const shippingOptions: Shipping[] = [
  { id: 1, value: "post", name: "post" },
  { id: 2, value: "tipax", name: "tipax" },
  { id: 3, value: "express", name: "express" },
];

export const tempCards: CardType[] = [
  { id: 1, name: "Travis scott", image: "/poster.webp", price: 200 },
  { id: 2, name: "Travis scott2", image: "/poster-2.webp", price: 100 },
  { id: 3, name: "Travis scott3", image: "/poster-3.webp", price: 300 },
  { id: 4, name: "Travis scott4", image: "/banner.jpg", price: 500 },
];

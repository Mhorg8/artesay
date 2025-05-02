import {
  MdOutlineLocalOffer,
  MdLockOutline,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

export const navLinks = [
  {
    id: 2,
    path: "/posters",
    title: "posters",
  },
  { id: 3, path: "/albums", title: "albums" },
  { id: 4, path: "/login", title: "Login" },
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

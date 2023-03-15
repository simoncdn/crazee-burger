import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const inputsConfig = [
  {
    name: "title",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    icon: <FaHamburger className="icon" />,
  },
  {
    name: "imageSource",
    type: "url",
    pattern: "https://.*",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    icon: <BsFillCameraFill className="icon" />,
  },
  {
    name: "price",
    type: "text",
    placeholder: "Prix",
    icon: <MdOutlineEuro className="icon" />,
  },
];

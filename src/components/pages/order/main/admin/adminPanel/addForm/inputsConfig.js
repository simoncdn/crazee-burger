import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputsConfig = (inputData) => [
  {
    id: crypto.randomUUID(),
    name: "title",
    type: "text",
    value: inputData.title,
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger className="icon" />,
  },
  {
    id: crypto.randomUUID(),
    name: "imageSource",
    type: "url",
    value: inputData.imageSource,
    pattern: "https://.*",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill className="icon" />,
  },
  {
    id: crypto.randomUUID(),
    name: "price",
    type: "text",
    value: inputData.price ? inputData.price : "",
    placeholder: "Prix",
    Icon: <MdOutlineEuro className="icon" />,
  },
];

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputsConfig = (inputData) => [
  {
    id: 1,
    name: "title",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger className="icon" />,
    value: inputData.title,
  },
  {
    id: 2,
    name: "imageSource",
    type: "url",
    pattern: "https://.*",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill className="icon" />,
    value: inputData.imageSource,
  },
  {
    id: 3,
    name: "price",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro className="icon" />,
    value: inputData.price ? inputData.price : "",
  },
];

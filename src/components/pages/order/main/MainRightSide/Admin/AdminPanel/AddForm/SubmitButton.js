import React from "react";
import Button from "../../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({ isSuccess }) {
  return (
    <>
      <Button
        label={"Ajouter un nouveau produit au menu"}
        classname="submit-button"
        variant={"success"}
      />
      {isSuccess && <SubmitMessage />}
    </>
  );
}

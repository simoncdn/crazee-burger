import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>ErrorPage</h1>

      <Link to={"/"}>
        <button>Retourner à la page d'accueil</button>
      </Link>
    </div>
  );
}

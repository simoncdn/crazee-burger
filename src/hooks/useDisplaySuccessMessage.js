import { useState } from "react";

export const useDisplaySuccessMessage = (params) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const displaySuccessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return { isSuccess, displaySuccessMessage };
};

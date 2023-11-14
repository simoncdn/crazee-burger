import { useState } from "react";

export const useDisplaySuccessMessage = (timeDelay = 2000) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const displaySuccessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, timeDelay);
  };

  return { isSuccess, displaySuccessMessage };
};

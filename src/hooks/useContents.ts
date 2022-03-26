import { useCallback, useEffect, useState } from "react";

const useContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fetcher = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, []);
  useEffect(() => {
    fetcher();
  }, [fetcher]);
  useEffect(() => {
    console.log("isOpen", isOpen);
  }, []); // isOpen
  return {
    isOpen,
  };
};

export default useContents;

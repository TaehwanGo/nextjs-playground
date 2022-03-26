import { useEffect, useState } from "react";

const useContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO : setIsOpen이 dependency array에 포함되지 않으면 에러가 떠야 된다
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return {
    isOpen,
  };
};

export default useContents;

import useContents from "@hooks/useContents";
import Link from "next/link";

const Contents = () => {
  const { isOpen } = useContents();
  return (
    <>
      <h1>hello world!</h1>
      <Link href="/">go home</Link>
    </>
  );
};

export default Contents;

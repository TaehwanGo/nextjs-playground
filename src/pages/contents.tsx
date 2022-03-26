import useContents from "@hooks/useContents";
// import { useContents } from "@hooks";

const Contents = () => {
  const {} = useContents();
  return <div>hello world!</div>;
};

export default Contents;

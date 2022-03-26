import useContents from "@hooks/useContents";

const Contents = () => {
  const { isOpen } = useContents();
  return <div>hello world!</div>;
};

export default Contents;

import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1>home</h1>
      <Link href="/contents">go to content</Link>
    </>
  );
};

export default Home;

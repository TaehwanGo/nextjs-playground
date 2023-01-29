import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1>home</h1>
      <div>
        <Link href="/contents">go to content</Link>
      </div>
      <div>
        <Link href="/login/kakao">kakao login</Link>
      </div>
    </>
  );
};

export default Home;

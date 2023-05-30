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
      <div>
        <Link href="/pdf/">pdf page</Link>
      </div>
      <div>
        <Link href="/froala">froala page</Link>
      </div>
    </>
  );
};

export default Home;

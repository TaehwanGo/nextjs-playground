import Image from "next/image";
import { useState } from "react";

export default function ImagePage() {
  const [src, setSrc] = useState("/not-exist.png");
  return (
    <>
      <h1>image onerror</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/not-exist.png"
        alt="placeholder"
        onError={(e) => {
          // @ts-ignore
          e.target.src = "/assets/images/placeholder.png";
        }}
      />
      {/* use Next Image */}
      <h1>Next Image</h1>
      <Image
        src={src}
        alt="placeholder"
        width={150}
        height={150}
        onError={(e) => {
          setSrc("/assets/images/placeholder.png");
        }}
      />
    </>
  );
}

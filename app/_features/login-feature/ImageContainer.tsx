import Image from "next/image";
import LoginImag from "../../../public/login.jpg";

export function ImageContainer() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={LoginImag}
        alt="the page Image"
        fill
        className="object-cover"
        priority
      />
      <Slogan />
    </div>
  );
}

function Slogan() {
  return (
    <div className="h-[15%] w-[50%] bg-green-950 text-neutral-50 text-xl font-bold flex items-center justify-center rounded-lg border-l border-amber-400 absolute top-5 left-[25%] italic">
      Our Next Favorite Book Starts Here
    </div>
  );
}

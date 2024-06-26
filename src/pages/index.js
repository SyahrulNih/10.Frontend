import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/component/navBar";
import ButtonNav from "@/component/ButtonNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar/>
      <h1 className="text-3xl">Home Page</h1>
      <ButtonNav/>
    </>
  );
}

import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Champions } from "./components/Champions";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Champions />
      <Contact />
    </>
  );
}

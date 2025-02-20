import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Building from "./Components/Building";
import Core from "./Components/Core";
import Portfolio from "./Components/Portfolio";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Partners/>
      <Building/>
      <Core/>
      <Portfolio/>
   </div>
  );
}

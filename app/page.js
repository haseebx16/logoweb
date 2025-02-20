import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Building from "./Components/Building";
import Core from "./Components/Core";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Talk from "./Components/Talk";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Partners/>
      <Building/>
      <Core/>
      <Portfolio/>
      <Service/>
      <Testimonials/>
      <Talk/>
   </div>
  );
}

import About from "@/components/About";
import NavBar from "@/components/elements/NavBar";
import Landingpage from "@/components/Landingpage";
import Picture from "@/components/Picture";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section
      id="body"
      className="  bg-primary-black text-primary-white font-MintGrotesk justify-center items-center flex flex-col"
    >
      <NavBar />
      <Landingpage/>
      <About/>
      <Projects/>
      <Picture/>
    </section>
  );
}

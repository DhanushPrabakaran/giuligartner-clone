import About from "@/components/About";
import NavBar from "@/components/elements/NavBar";
import Landingpage from "@/components/Landingpage";

export default function Home() {
  return (
    <section
      id="body"
      className="  bg-primary-black text-primary-white font-MintGrotesk justify-center items-center flex flex-col"
    >
      <NavBar />
      <Landingpage/>
      <About/>
    </section>
  );
}

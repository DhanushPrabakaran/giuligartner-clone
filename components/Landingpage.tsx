import React from "react";

const Landingpage = () => {
  return (
    <section
      id="body"
      className="w-full h-screen bg-primary-black text-primary-white font-MintGrotesk justify-center items-center flex flex-col "
    >
      <div
        className="relative flex items-center  
        justify-center w-[90vw] h-[80vh] overflow-hidden rounded-3xl py-10 px-3 mt-16"
      >
        <div className=" text-primary-white text-5xl md:text-6xl lg:text-7xl z-10 text-center font-roslindale">
          GIULIA GARTNER PHOTOGRAPHER & FILMMAKER
        </div>
        <video
          src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
          autoPlay
          muted
          loop
          className="absolute  w-auto  
            min-w-full min-h-full max-w-none"
        />
      </div>
    </section>
  );
};

export default Landingpage;

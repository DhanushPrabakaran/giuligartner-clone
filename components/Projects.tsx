"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import about3 from "@/public/about-2.jpg";
import about1 from "@/public/about-image-1.jpeg";
const Projects = () => {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".box1",{
            x: -50,
            y:100
        }, {
            x: 1000,
            y:50,
            duration:1,
            scrollTrigger: {
                trigger: ".box2",
                start: "top 80%", // Start the animation when the top of the image is 80% from the top of the viewport
                end: "top 20%", // End the animation when the top of the image is 20% from the top of the viewport
                toggleActions: "play none none reverse",
                scrub: 1, // Smooth animation while scrolling
            }
        });
        gsap.fromTo(".box2",{
            x: 50,
            y:100
        }, {
            x: -1000,
            y:50,
            duration:1,
            scrollTrigger: {
                trigger: ".box2",
                start: "top 80%", // Start the animation when the top of the image is 80% from the top of the viewport
                end: "top 20%", // End the animation when the top of the image is 20% from the top of the viewport
                toggleActions: "play none none reverse",
                scrub: 1, // Smooth animation while scrolling
            }
        });
    }, []);

    return (
        <div 
            className="relative flex align-middle items-center justify-around flex-col w-full min-h-screen overflow-hidden"
            ref={container}
            id="conta"
        >
            <div className="inline-flex gap-2 justify-center">
                <div>MARCH 2023</div>
                <div>icon</div>
                <div>GREENLAND</div>
            </div>
            <div className="res-heading-4xl max-w-md text-center font-roslindale">Visit Greenland</div>
            <button className="border text-sm rounded-full px-3 py-2">
                SEE CASE STUDY
            </button>
            <Image
                className="box1 absolute rounded-2xl"
                src={about3}
                width={800}
                height={800}
                alt={""}
            />
            <Image
                className="box2 absolute rounded-2xl"
                src={about1}
                width={800}
                height={800}
                alt={""}
            />
        </div>
    );
};

export default Projects;

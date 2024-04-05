"use client";

import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
import { useRouter } from "next/navigation";
import FirstSection from "./_sections/first-section";
import SecondSection from "./_sections/second-section";
import ThirdSection from "./_sections/third-section";
import FourthSection from "./_sections/fourth-section";
import FifthSection from "./_sections/fifth-section";
import SixthSection from "./_sections/sixth-section";

function page() {
  const [savedName, setSavedName] = React.useState("");
  const router = useRouter();
  const isMobileDevice = useCheckDeviceScreen();
  const { scrollYProgress } = useScroll();
  const [topHovered, setTopHovered] = React.useState(false);

  const firstSectionRef = React.useRef(null);
  const secondSectionRef = React.useRef(null);
  const thirdSectionRef = React.useRef(null);
  const fourthSectionRef = React.useRef(null);
  const fifthSectionRef = React.useRef(null);

  const firstInView = useInView(firstSectionRef);
  const fourthInView = useInView(fourthSectionRef);
  const fifthInView = useInView(fifthSectionRef, {
    margin: "0px 0px -50% 0px",
  });

  const topCircleY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, -100, -100, 0],
  );

  const mobileTopCircleOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 0.8, 0.8, 0.8],
  );

  const mobileBottomCircleOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 1, 1, 1],
  );

  const mobileTopCircleStyle = isMobileDevice
    ? {
        opacity: mobileTopCircleOpacity,
      }
    : undefined;

  const bottomCircleStyle = isMobileDevice
    ? {
        height: firstInView ? "10rem" : "7rem",
        width: firstInView ? "10rem" : "7rem",
        opacity: mobileBottomCircleOpacity,
      }
    : {
        height: firstInView ? "30rem" : "17rem",
        width: firstInView ? "30rem" : "17rem",
      };

  React.useEffect(() => {
    const localName = localStorage.getItem("user_name_porto");
    setSavedName(localName as string);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      id="main"
      className="no-scrollbar relative snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
    >
      <>
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 100,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          style={{ y: topCircleY, ...mobileTopCircleStyle }}
          className={twMerge(
            `fixed -left-[8rem] -top-[5.5rem] z-[10] rounded-full border-4 border-dashed border-white p-3 transition-all md:p-10`,
            fourthInView && "border-white/30",
          )}
        >
          <motion.div
            onMouseEnter={() => setTopHovered(true)}
            onMouseLeave={() => setTopHovered(false)}
            onClick={() => router.push("/")}
            animate={{
              rotate: 420,
              transition: {
                duration: 100,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            className={twMerge(
              `h-[15rem] w-[15rem] cursor-pointer rounded-full border-2 border-dashed border-white transition-all hover:bg-[#f0fb3b]/50`,
              fourthInView && "border-white/30",
            )}
           />
        </motion.div>
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 100,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="fixed -bottom-[5.5rem] -right-[8rem] z-20 opacity-50 md:opacity-100 rounded-full border-4 border-dashed border-white p-10"
        >
          <motion.div
            animate={{
              rotate: 420,
              transition: {
                duration: 100,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            style={bottomCircleStyle}
            className="flex items-center justify-center rounded-full border-2 border-dashed border-white transition-all md:z-20"
           />
        </motion.div>
        {!isMobileDevice && (
          <div
            className={twMerge(
              `fixed bottom-[4rem] right-[1rem] z-20 w-[15rem] text-center md:bottom-[10rem] md:right-[3rem]`,
              !firstInView &&
                "bottom-[2rem] right-0 w-fit md:bottom-[5.5rem] md:right-[1.25rem]",
            )}
          >
            <a href="/SAHRUL_RAMDAN_CV_UPDATE_5_APR_2024.pdf" download={"Sahrul Ramdan's CV.pdf"} className="transition-all hover:bg-[#f0fb3b] hover:text-black ">
              {firstInView
                ? "just in case if u want to download the cv"
                : "download cv"}
            </a>
          </div>
        )}
        {topHovered && (
          <div className="fixed left-0 top-[3rem]">
            <p className="text-[1.5rem]">back to intro</p>
          </div>
        )}

        <FirstSection firstSectionRef={firstSectionRef} />
        <SecondSection
          savedName={savedName}
          secondSectionRef={secondSectionRef}
        />
        <ThirdSection thirdSectionRef={thirdSectionRef} />
        <FourthSection fourthSectionRef={fourthSectionRef} />
        <FifthSection fifthSectionRef={fifthSectionRef} inView={fifthInView} />
        <SixthSection savedName={savedName} />
      </>
    </motion.main>
  );
}

export default page;

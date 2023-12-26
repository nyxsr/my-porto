"use client";

import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import FirstSection from "./_sections/first-section";
import SecondSection from "./_sections/second-section";
import ThirdSection from "./_sections/third-section";
import FourthSection from "./_sections/fourth-section";
import FifthSection from "./_sections/fifth-section";
import SixthSection from "./_sections/sixth-section";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const [savedName, setSavedName] = React.useState("");
  const router = useRouter()
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
      {isMobileDevice ? (
        <section className="mx-auto flex min-h-screen max-w-[85vw] flex-col items-center justify-center text-center">
          <p className="text-sm">sorry, i'm still working on mobile version</p>
          <p className="text-lg font-medium leading-5">
            but you still can reach me on
          </p>
          <div className="mt-5 flex gap-4">
            <Link
              href="https://www.linkedin.com/in/sahrul-ramdan-2012/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#f0fb3b] px-2 text-black"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.linkedin.com/in/sahrul-ramdan-2012/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#f0fb3b] px-2 text-black"
            >
              Email
            </Link>
          </div>
        </section>
      ) : (
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
            style={{ y: topCircleY }}
            className={twMerge(
              `fixed -left-[8rem] -top-[5.5rem] z-[10] rounded-full border-4 border-dashed border-white p-10 transition-all`,
              fourthInView && "border-white/30",
            )}
          >
            <motion.div
              onMouseEnter={() => setTopHovered(true)}
              onMouseLeave={() => setTopHovered(false)}
              onClick={()=> router.push("/")}
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
                `h-[15rem] cursor-pointer w-[15rem] rounded-full border-2 border-dashed border-white transition-all hover:bg-[#f0fb3b]/50`,
                fourthInView && "border-white/30",
              )}
            ></motion.div>
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
            className="fixed -bottom-[5.5rem] -right-[8rem] z-20 rounded-full border-4 border-dashed border-white p-10"
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
              style={{
                height: firstInView ? "30rem" : "17rem",
                width: firstInView ? "30rem" : "17rem",
              }}
              className="z-20 flex items-center justify-center rounded-full border-2 border-dashed border-white transition-all"
            ></motion.div>
          </motion.div>
          <div
            className={twMerge(
              `fixed bottom-[10rem] right-[3rem] z-20 w-[15rem] text-center`,
              !firstInView && "bottom-[5.5rem] right-[1.25rem] w-fit",
            )}
          >
            <button className="transition-all hover:bg-[#f0fb3b] hover:text-black ">
              {firstInView
                ? "just in case if u want to download the cv"
                : "download cv"}
            </button>
          </div>
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
          <FifthSection
            fifthSectionRef={fifthSectionRef}
            inView={fifthInView}
          />
          <SixthSection savedName={savedName} />
        </>
      )}
    </motion.main>
  );
}

export default page;

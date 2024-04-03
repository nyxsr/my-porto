import { EmailBG, LinkedinBG } from "@/assets/images";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const AnimatedImage = motion(Image);
function SixthSection({ savedName }: { savedName: string }) {
  const thisSectionRef = React.useRef<HTMLDivElement>(null);
  const isMobileDevice = useCheckDeviceScreen();
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: thisSectionRef,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, isMobileDevice ? 0.3 : 0.9, 1], [0, 0.2, 1]);
  return (
    <motion.section
      ref={thisSectionRef}
      style={{ opacity }}
      className="relative z-0 mt-[10rem] flex min-h-screen snap-center flex-col items-start justify-center"
    >
      <AnimatePresence>
        {hoveredItem === 0 && (
          <AnimatedImage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            key={"linkedin"}
            src={LinkedinBG}
            alt="LinkedinBG"
            className="fixed min-w-[100vw] min-h-screen md:min-h-0 object-cover left-0 top-0 -z-10 brightness-50"
          />
        )}
        {hoveredItem === 1 && (
          <AnimatedImage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            key={"email"}
            src={EmailBG}
            alt="emailBG"
            className="fixed min-w-[100vw] min-h-screen md:min-h-0 object-cover left-0 top-0 -z-10 brightness-[25%]"
          />
        )}
      </AnimatePresence>
      <p className="absolute bottom-10 right-10 md:left-10 md:text-[1.5rem] italic">See you around {", " + savedName ?? ""}</p>
      <div className="relative z-10 flex w-full items-center justify-end">
        <div className="mr-10 max-w-[70vw] pt-[10rem] md:pt-0 text-[1.2rem] md:text-[2rem]">
          <p className="mt-16">
            {savedName && `Now ${savedName?.split(" ")[0]}, `}I'm currently
            working at{" "}
            <Link
              target="_blank"
              href={"https://www.feedloop.ai/"}
              className="bg-[#F0FB3B] text-[#1f1f1f]"
            >
              Feedloop
            </Link>{" "}
            as a Software Engineer, but i can still free up some time for
            helping you with your projects.
          </p>
        </div>
      </div>
      <div className="relative z-10 mx-10 mt-[2rem] mb-[7rem] md:mb-0 md:mt-[10rem] flex min-w-[40vw] flex-col">
        <div className="border-t border-white" />
        <Link
          onMouseEnter={() => setHoveredItem(0)}
          onMouseLeave={() => setHoveredItem(null)}
          href={"https://www.linkedin.com/in/sahrul-ramdan-2012/"}
          className={twMerge(
            `ml-10 py-3 text-[2rem] transition-all`,
            hoveredItem === 1 && "opacity-50",
          )}
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        <div className="border-t border-white" />
        <Link
          onMouseEnter={() => setHoveredItem(1)}
          onMouseLeave={() => setHoveredItem(null)}
          href={"mailto:sahrulramdan.75@gmail.com"}
          className={twMerge(
            `ml-10 py-3 text-[2rem]`,
            hoveredItem === 0 && "opacity-50",
          )}
          rel="noopener noreferrer"
          target="_blank"
        >
          Email
        </Link>
        <div className="border-t border-white" />
      </div>
    </motion.section>
  );
}

export default SixthSection;

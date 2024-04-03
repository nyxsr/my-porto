import Image from "next/image";
import React, { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedImage = motion(Image);
function ThirdSection({
  thirdSectionRef,
}: {
  thirdSectionRef: React.Ref<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef as RefObject<HTMLElement>,
    offset: ["start end", "center start"],
  });
  const catY = useTransform(scrollYProgress, [0, 1], [-300, 100]);

  return (
    <section
      ref={thirdSectionRef}
      className="relative z-0 mx-10 mt-[10rem] flex min-h-screen snap-center flex-col items-center justify-center"
    >
      <AnimatedImage
        style={{ y: catY }}
        src={"https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"}
        alt="cat-coding"
        width={300}
        height={300}
        className="absolute object-cover object-center brightness-50"
      />
      <motion.h3
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        className="relative z-10 text-center text-[3rem] font-semibold md:text-left md:text-[8rem]"
      >
        Coding since <span className="text-[#f0fb3b]">2017</span>
      </motion.h3>
      <p className="relative z-10 text-center font-medium md:text-left">
        Always learn, keep improving, and always want to be better
      </p>
    </section>
  );
}

export default ThirdSection;

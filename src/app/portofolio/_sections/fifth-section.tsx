import {
  ExpressLogo,
  NextLogo,
  ReactLogo,
  TailwindLogo,
} from "@/assets/images";
import { FramerLogo } from "@/assets/svgs";
import {
  useScroll,
  useTransform,
  motion,
  useAnimationControls,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import React, { RefObject } from "react";

const AnimatedImage = motion(Image);
function FifthSection({
  fifthSectionRef,
  inView,
}: {
  fifthSectionRef: React.Ref<HTMLDivElement>;
  inView: boolean;
}) {
  const textAnimateControls = useAnimationControls();
  const endTextAnimateControls = useAnimationControls();
  const { scrollYProgress } = useScroll({
    target: fifthSectionRef as RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-1000, 0, 1000]);
  const reactY = useTransform(scrollYProgress, [0, 1], [-300, 500]);
  const tailwindY = useTransform(scrollYProgress, [0, 1], [-100, 300]);
  const smallTextOpacity = useTransform(scrollYProgress, [0, 0.63, 0.64], [0, 0, 1]);

  React.useEffect(() => {
    if (inView) {
      textAnimateControls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      textAnimateControls.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section
      ref={fifthSectionRef}
      className="relative z-0 mx-10 mt-[10rem] flex min-h-[200vh] snap-center flex-col items-center justify-center"
    >
      <AnimatedImage
        src={NextLogo}
        alt="nextjs logo"
        width={500}
        height={200}
        className="absolute left-0 opacity-25 invert filter"
      />
      <AnimatedImage
        style={{ y: reactY }}
        src={ReactLogo}
        alt="reactjs logo"
        width={500}
        height={200}
        className="absolute right-0 top-[15%] opacity-25"
      />
      <AnimatedImage
        style={{ y: tailwindY }}
        src={TailwindLogo}
        alt="tailwind logo"
        width={300}
        height={200}
        className="absolute bottom-[20%] left-[10%] m-auto opacity-25"
      />
      <AnimatedImage
        src={FramerLogo}
        alt="framer logo"
        width={400}
        height={200}
        className="absolute bottom-[10%] right-[15%] m-auto opacity-25"
      />
      <AnimatedImage
        src={ExpressLogo}
        alt="express logo"
        width={400}
        height={200}
        className="filter-invert absolute inset-x-0 bottom-0 m-auto opacity-25 filter"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={textAnimateControls}
        style={{ y }}
        className="absolute z-20 max-w-[60vw]"
      >
        <p className="text-[2.5rem]">
          I am always enjoying every step for{" "}
          <span className="text-[#F0FB3B]">creating a great product</span> yet{" "}
          <span className="text-[#F0FB3B]">beautiful</span> design
        </p>
        <p className="text-[5rem] font-semibold">
          To achieve that i usually use these
        </p>
        <motion.p
          style={{ opacity: smallTextOpacity }}
          className="text-[2.5rem] italic"
        >
          and the list wont end here...
        </motion.p>
      </motion.div>
    </section>
  );
}

export default FifthSection;

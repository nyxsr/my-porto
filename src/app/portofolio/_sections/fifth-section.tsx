import {
  ExpressLogo,
  NextLogo,
  ReactLogo,
  TailwindLogo,
} from "@/assets/images";
import { FramerLogo } from "@/assets/svgs";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
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
  const isMobileDevice = useCheckDeviceScreen();
  const { scrollYProgress } = useScroll({
    target: fifthSectionRef as RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1],
    isMobileDevice ? [0, 50, 100, 150] : [-1000, 100, 1000, 1200],
  );
  const reactY = useTransform(scrollYProgress, [0, 1], [-300, 500]);
  const tailwindY = useTransform(scrollYProgress, [0, 1], [-100, 300]);
  const nextY = useTransform(scrollYProgress, [0, 1], [-500, 300]);
  const framerY = useTransform(scrollYProgress, [0, 1], [-400, 250]);
  const smallTextOpacity = useTransform(
    scrollYProgress,
    isMobileDevice ? [0, 0.10, 0.11] : [0, 0.63, 0.64],
    [0, 0, 1],
  );

  React.useEffect(() => {
    if (inView) {
      textAnimateControls.start({
        opacity: 1,
        transition: {
          duration: .2,
        },
      });
    } else {
      textAnimateControls.start({
        opacity: 0,
      });
    }
  }, [inView]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.2 && latest <= 0.9) {
      textAnimateControls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else if (latest === 1) {
      textAnimateControls.start({
        opacity: 0,
      });
    } else {
      textAnimateControls.start({
        opacity: 0,
      });
    }
  });

  return (
    <section
      ref={fifthSectionRef}
      className="relative z-0 mx-10 mt-[10rem] flex snap-y flex-col items-center justify-center min-h-[70vh] md:min-h-[200vh]"
    >
      <AnimatedImage
        style={{ y: isMobileDevice ? nextY : undefined }}
        src={NextLogo}
        alt="nextjs logo"
        width={isMobileDevice ? 150 : 500}
        height={isMobileDevice ? 150 : 200}
        className="absolute left-0 opacity-25 invert filter"
      />
      <AnimatedImage
        style={{ y: reactY }}
        src={ReactLogo}
        alt="reactjs logo"
        width={isMobileDevice ? 150 : 500}
        height={isMobileDevice ? 150 : 200}
        className="absolute right-0 top-[15%] opacity-25"
      />
      <AnimatedImage
        style={{ y: tailwindY }}
        src={TailwindLogo}
        alt="tailwind logo"
        width={isMobileDevice ? 150 : 300}
        height={isMobileDevice ? 75 : 200}
        className="absolute bottom-[20%] left-[10%] m-auto opacity-25"
      />
      <AnimatedImage
        style={{ y: isMobileDevice ? framerY : undefined }}
        src={FramerLogo}
        alt="framer logo"
        width={isMobileDevice ? 200 : 400}
        height={isMobileDevice ? 150 : 200}
        className="absolute bottom-[10%] right-0 md:right-[15%] m-auto opacity-25"
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
        <p className="text-[1rem] md:text-[2.5rem]">
          I am always enjoying every step for{" "}
          <span className="text-[#F0FB3B]">creating a great product</span> yet{" "}
          <span className="text-[#F0FB3B]">beautiful</span> design
        </p>
        <p className="text-[1.5rem] font-semibold md:text-[5rem]">
          To achieve that i usually use these
        </p>
        <motion.p
          style={{ opacity: smallTextOpacity }}
          className="text-[1.25rem] italic md:text-[2.5rem]"
        >
          and the list wont end here...
        </motion.p>
      </motion.div>
    </section>
  );
}

export default FifthSection;

import React, { RefObject, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Myself } from "@/assets/images";
import Image from "next/image";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";

function SecondSection({
  secondSectionRef,
  savedName
}: {
  secondSectionRef: React.Ref<HTMLDivElement>;
  savedName: string
}) {
  const isMobileDevice = useCheckDeviceScreen();
  const myPhotoRef = React.useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const thisSectionInView = useInView(
    secondSectionRef as RefObject<HTMLDivElement>,
  );

  const nameAnimateControls = useAnimationControls();
  const spanNameAnimateControls = useAnimationControls();
  const posAnimateControls = useAnimationControls();

  const onNameHovered = (e: React.MouseEvent) => {
    if (myPhotoRef.current) {
      setIsVisible(true);
      myPhotoRef.current.style.left = `${isMobileDevice ? e.clientX - 50 : e.clientX  }px`;
      myPhotoRef.current.style.top = `${isMobileDevice ? e.clientY - 50 : e.clientY  }px`;
    }
  };
  const onNameUnhovered = () => {
    if (myPhotoRef.current) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (thisSectionInView) {
      nameAnimateControls.start({ opacity: 1, transition: { delay: .3 } });
      spanNameAnimateControls.start({ width: "100%", opacity: 1, transition: { delay: .6 } });
      posAnimateControls.start({ opacity: 1, transition: { delay: .9 } });
    }
  }, [thisSectionInView]);
  return (
    <motion.section
      ref={secondSectionRef}
      className="relative z-0 mx-10 mt-[10rem] flex md:min-h-[70vh] snap-center flex-col items-start justify-center"
    >
      <motion.div
        animate={{ scale: isVisible ? 1 : 0, transition: { duration: 0.1 } }}
        ref={myPhotoRef}
        className="absolute h-[10rem] w-[10rem]"
      >
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-0 h-full w-full bg-[#f0fb3b] opacity-20" />
          <Image src={Myself} alt="Sahrul Ramdan" className="h-full w-full" />
        </div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={nameAnimateControls}
        className="select-none text-[3rem] md:text-[5rem]"
      >
        Hi {savedName?.split(" ")[0]},{savedName && <br/>} My name is{" "}
        <motion.span
          initial={{ width:0, opacity: 0 }}
          animate={spanNameAnimateControls}
          onMouseEnter={onNameHovered}
          onMouseMove={onNameHovered}
          onMouseLeave={onNameUnhovered}
          className="text-black font-semibold bg-[#f0fb3b]"
        >
          Sahrul Ramdan
        </motion.span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={posAnimateControls}
      >
        I&apos;m a <span className="text-[#f0fb3b] font-semibold">Front-End Developer</span>, but i have a passion in UI/UX and Backend
        Development.
      </motion.p>
    </motion.section>
  );
}

export default SecondSection;

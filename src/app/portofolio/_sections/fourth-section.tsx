import React, { RefObject } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import ItemList from "@/components/works/item-list";
import { WORK_LIST } from "@/constants/list";
import { v4 as uuidv4 } from 'uuid';

function FourthSection({
  fourthSectionRef,
}: {
  fourthSectionRef: React.Ref<HTMLDivElement>;
}) {
  const containerAnimateControls = useAnimationControls();
  const thisSectionInView = useInView(
    fourthSectionRef as RefObject<HTMLDivElement>,
  );

  React.useEffect(() => {
    if (thisSectionInView) {
      containerAnimateControls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      });
    }
  }, [thisSectionInView]);
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={containerAnimateControls}
      ref={fourthSectionRef}
      viewport={{ once: true }}
      className="relative z-10 mx-10 mt-[10rem] flex min-h-screen snap-center flex-col items-start justify-center"
    >
      <h2 className="static text-right md:absolute right-0 top-0 text-[3rem]">Selected Works</h2>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="flex max-w-[100%] md:max-w-[70%] flex-col gap-5"
      >
        {WORK_LIST.map((item, index) => (
          <ItemList
            index={index}
            key={uuidv4()}
            label={item.label}
            thumb={item.thumb}
            description={item.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default FourthSection;

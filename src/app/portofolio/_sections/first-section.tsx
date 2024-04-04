import React from 'react'
import { motion } from "framer-motion";

function FirstSection({firstSectionRef}: {firstSectionRef: React.Ref<HTMLDivElement>}) {
  return (
    <motion.section
        ref={firstSectionRef}
        className="relative z-0 mx-10 flex min-h-screen snap-center flex-col items-start justify-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="md:max-w-[80vw] relative z-10 text-[2rem] md:text-[5rem] font-semibold"
        >
          love to <span className="text-[#F0FB3B]">create apps</span> and always{" "}
          <span className="text-[#F0FB3B]">love to learn</span>.
        </motion.h1>
        <p className="md:max-w-[40vw] text-sm">
          A persistent person who loves to solve problems by crafting innovative
          digital products that can help people. Experienced in designing and
          developing an app in the early stage until finished. Problem-solver
          and love to think creatively.
        </p>
      </motion.section>
  )
}

export default FirstSection
import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
import { MdOutlineClose } from "react-icons/md";

function ItemList({
  label,
  thumb,
  description,
  index,
}: {
  label: string;
  thumb: StaticImageData;
  description: string | React.ReactNode;
  index: number;
}) {
  const isMobileDevice = useCheckDeviceScreen();
  const [isVisible, setIsVisible] = React.useState(false);
  const itemRef = React.useRef<HTMLParagraphElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const itemOnHover = (e: React.MouseEvent) => {
    if (menuRef.current) {
      setIsVisible(true);
      menuRef.current.style.left = e.clientX + "px";
      menuRef.current.style.top = e.clientY + (index > 1 ? -350 : 0) + "px";
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      viewport={{ once: true }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2 * index },
      }}
      id="item"
    >
      {!isMobileDevice && (
        <motion.div
          ref={menuRef}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          className="absolute z-20 max-w-[20rem] bg-white p-3 text-[#1f1f1f]"
        >
          <Image src={thumb} alt={label} width={300} height={300} />
          <div className="mt-3">{description}</div>
        </motion.div>
      )}
      {isMobileDevice ? (
        <>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              exit={{ opacity: 0 }}
              className="absolute z-[99] bg-white p-3 text-[#1f1f1f]"
            >
              <button className="absolute right-3 top-3 text-black text-3xl" onClick={() => setIsVisible(false)}><MdOutlineClose/></button>
              <Image src={thumb} alt={label} width={300} height={300} />
              <div>{description}</div>
            </motion.div>
          )}
        </AnimatePresence>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="w-full text-left active:bg-[#f0fb3b] active:text-[#1f1f1f]"
          >
            {label}
          </button>
        </>
      ) : (
        <p
          ref={itemRef}
          onMouseEnter={itemOnHover}
          onMouseLeave={() => setIsVisible(false)}
          onMouseMove={itemOnHover}
          className={twMerge(
            `text-[2.5rem] font-bold uppercase leading-[5rem] transition-all hover:bg-[#f0fb3b] hover:text-[#1f1f1f]`,
          )}
        >
          {label}
        </p>
      )}
    </motion.div>
  );
}

export default ItemList;

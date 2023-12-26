import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function ItemList({ label, thumb, description,index }: { label: string; thumb: StaticImageData, description: string | React.ReactNode, index: number }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const itemRef = React.useRef<HTMLParagraphElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const itemOnHover = (e: React.MouseEvent) => {
        if (menuRef.current) {
            setIsVisible(true);
            menuRef.current.style.left = e.clientX + "px";
            menuRef.current.style.top = (e.clientY + (index > 1 ? -350 : 0)) + "px";
        }
    }
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} viewport={{ once: true }} animate={{ opacity: 1, x:0, transition:{duration:.5, delay: 0.2 * index} }} id="item">
        <motion.div ref={menuRef} animate={{ scaleX: isVisible ? 1 : 0 }} className="absolute text-[#1f1f1f] max-w-[20rem] z-20 p-3 bg-white">
            <Image src={thumb} alt={label} width={300} height={300} />
            <div className="mt-3">{description}</div>
        </motion.div>
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
    </motion.div>
  );
}

export default ItemList;

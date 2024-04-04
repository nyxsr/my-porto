import { generateRandomIntroNotTypeMessage } from "@/constants/message";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function Step0() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen items-center justify-center"
    >
      <h1 className="xl:text-[9rem] 2xl:text-[10rem]">Hello</h1>
    </motion.section>
  );
}

export function Step1({
  isSubmitted,
  setIsSubmitted,
  handleSaveName,
  setName,
  name,
}: {
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveName: () => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}) {
  const isMobileDevice = useCheckDeviceScreen();
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <motion.h1
          initial={{ y: 0 }}
          animate={{ y: -100, transition: { delay: 1, duration: 1 } }}
          className="text-[1.5rem] xl:text-[7rem] 2xl:text-[8rem]"
        >
          What is your name ?
        </motion.h1>
        <div className="flex items-center justify-center md:justify-between">
          <motion.input
            initial={{ opacity: 0, width: "3rem" }}
            animate={{
              opacity: 1,
              width: isMobileDevice ? "70%" : "20rem",
              transition: { delay: 1, duration: 1 },
            }}
            type="text"
            name="name"
            id="name"
            autoFocus
            onChange={(e) => {
              setName(e.target.value);
              setIsSubmitted(false);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter" && name.length <= 15) {
                handleSaveName();
              }
            }}
            className="block border-b border-white bg-transparent p-3 text-3xl focus:outline-none"
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.5 },
            }}
            disabled={name.length > 15}
            className="rounded-full bg-white p-2 text-3xl text-black transition-all hover:scale-110 active:scale-90"
            onClick={handleSaveName}
          >
            <FaArrowRight />
          </motion.button>
        </div>
        {name.length > 15 && (
          <motion.small className="mt-3 text-lg">
            Hmm , i think we just need your nickname
          </motion.small>
        )}
        {name.length === 0 && isSubmitted && (
          <motion.small className="mt-3 text-center md:text-left text-lg">
            {generateRandomIntroNotTypeMessage()}
          </motion.small>
        )}
      </motion.section>
    </div>
  );
}

export function AltStep1({
  savedName,
  setStep,
}: {
  savedName: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  setTimeout(() => {
    setStep(2);
  }, 3000);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen items-center justify-center"
    >
      <h1 className="max-w-[80vw] text-center xl:text-[5rem] 2xl:text-[6rem]">
        You are {savedName?.split(" ")[0]}, right ?
      </h1>
    </motion.section>
  );
}

export function Step2({
  name,
  setStep,
  setSavedName,
}: {
  name: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSavedName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const router = useRouter();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <h1 className="text-[2rem] md:text-[7rem]">Hi, {name}</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        exit={{ opacity: 0 }}
        className="text-center xl:text-[3rem] 2xl:text-[5rem]"
      >
        Do you wanna continue ?
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 3 } }}
        className="mt-10 flex flex-col gap-2"
      >
        <button
          onClick={() => {
            setStep(3);
            setTimeout(() => {
              router.push("/portfolio");
            }, 1000);
          }}
          className="bg-white p-3 text-[1.5rem] md:text-[3.5rem] focus:scale-90 text-black transition-all hover:scale-110"
        >
          Yes, please
        </button>
        <button
          onClick={() => {
            setStep(1);
            setSavedName("");
            localStorage.removeItem("user_name_porto");
          }}
          className="p-3 md:text-[1.25rem] hover:underline"
        >
          I think i just remember my real name
        </button>
      </motion.div>
    </motion.section>
  );
}

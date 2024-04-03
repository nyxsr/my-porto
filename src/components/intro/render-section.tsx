import React from "react";
import { AnimatePresence } from "framer-motion";
import { AltStep1, Step0, Step1, Step2 } from "./Steps";

export const renderIntro = () => {
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [savedName, setSavedName] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSaveName = () => {
    setIsSubmitted(true);
    localStorage.setItem("user_name_porto", name);
    setSavedName(name);
  };

  React.useEffect(() => {
    if (step === 0) {
      setTimeout(() => {
        setStep(1);
      }, 3000);
    }
  }, [step]);

  React.useEffect(() => {
    if (isSubmitted && savedName) {
      setStep(2);
    }
  }, [isSubmitted, savedName]);

  React.useEffect(() => {
    const localName = localStorage.getItem("user_name_porto");
    setSavedName(localName ?? "");
  }, []);

  return (
    <AnimatePresence>
      {step === 0 && <Step0 />}
      {step === 1 && (savedName === "" || !savedName) && (
        <Step1
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          handleSaveName={handleSaveName}
          setName={setName}
          name={name}
        />
      )}
      {(savedName !== "" && step === 1) && (
        <AltStep1 savedName={savedName} setStep={setStep} />
      )}
      {step === 2 && (
        <Step2
          setSavedName={setSavedName}
          name={savedName as string}
          setStep={setStep}
        />
      )}
    </AnimatePresence>
  );
};

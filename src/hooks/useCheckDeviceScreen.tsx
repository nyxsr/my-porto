import React from "react";

function useCheckDeviceScreen(): boolean {
  const [width, setWidth] = React.useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    // Load window only on the client side
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width <= 768;

  return isMobile;
}

export default useCheckDeviceScreen;

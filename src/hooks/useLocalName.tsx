import React from "react";

function useLocalName() {
  const [savedName, setSavedName] = React.useState("");

  React.useEffect(() => {
    const localName = localStorage.getItem("user_name_porto");
    setSavedName(localName as string);
  },[]);

  return { savedName, setSavedName };
}

export default useLocalName

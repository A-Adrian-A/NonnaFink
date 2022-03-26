import { useState, useEffect } from 'react';



export function Import({ smallScreen, bigScreen, children }) {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    var isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
    console.log(isSmallScreen)
    console.log("useEffect")
    const importCallback = isSmallScreen ? smallScreen : bigScreen;


    importCallback().then(componentDetails => {
      // Set the import data in the local state
      console.log("saveComponent")
      setComponent(componentDetails);
    });
  }, [smallScreen, bigScreen]);

  // The actual component is assigned to the 'default' prop
  console.log("retrunComponent")
  return children(Component ? Component.default : () => null);
}
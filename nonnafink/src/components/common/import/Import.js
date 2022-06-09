import { useState, useEffect } from 'react';



export function Import({ smallScreen, bigScreen, children }) {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    var isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
    const importCallback = isSmallScreen ? smallScreen : bigScreen;

    importCallback().then(componentDetails => {
      // Set the import data in the local state
      setComponent(componentDetails);
    });
  }, [smallScreen, bigScreen]);

  // The actual component is assigned to the 'default' prop
  return children(Component ? Component.default : () => null);
}
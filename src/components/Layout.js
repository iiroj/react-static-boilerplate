import FontFaceObserver from "fontfaceobserver";
import React, { useEffect } from "react";

import Global from "../styles/global";

const plex300 = new FontFaceObserver("IBM Plex Sans", { weight: 300 });
const plex600 = new FontFaceObserver("IBM Plex Sans", { weight: 600 });

export default ({ children }) => {
  useEffect(() => {
    Promise.all([plex300.load(), plex600.load()]).catch();
  }, []);

  return (
    <>
      <Global />
      {children}
    </>
  );
};

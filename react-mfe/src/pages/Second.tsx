import React from "react";
import Publisher from "./Publisher";
import Receiver from "./Receiver";

type Props = {};

function Second({}: Props) {
  return (
    <>
      <Publisher />
      <Receiver />
      {/* <h3 style={{ marginTop: "50px" }}>Second Component</h3> */}
    </>
  );
}

export default Second;

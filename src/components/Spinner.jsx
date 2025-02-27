import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import { css } from "@emotion/react";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <RiseLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={50}
    />
  );
};

export default Spinner;

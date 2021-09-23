import React from "react";

import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 150px 50% 100px 45%;
  border-color: red;
`;

export default function Loading() {
  return (
    <div className="sweet-loading">
      <RingLoader loading={true} css={override} size={150} color="#007bff" />
      <h2>|-- LIZA MUSEUM ARTS--| </h2>
    </div>
  );
}

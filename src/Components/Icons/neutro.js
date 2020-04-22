import React from "react";

const Neutro = (props) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  >
    <circle style={{ opacity: 0.15 }} cx="14" cy="14" r="12.7" />
    <path d="M23,15H5c-0.6,0-1-0.4-1-1s0.4-1,1-1H23c0.6,0,1,0.4,1,1S23.6,15,23,15z" />
  </svg>
);

export default Neutro;

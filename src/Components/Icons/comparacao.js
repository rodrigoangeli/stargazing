import React from "react";

const Comparacao = (props) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  >
    <path d="M22.2,3.4h-4.9v3h4.5v14.1l-4.5-5.4v6.9v1.8v1.2h4.9c1.5,0,2.7-1.2,2.7-2.7V6.1C24.8,4.6,23.7,3.4,22.2,3.4z" />
    <path
      d="M14.3,2c0-0.8-0.7-1.5-1.5-1.5S11.3,1.2,11.3,2v1.4H5.9c-1.5,0-2.7,1.2-2.7,2.7v16.3c0,1.5,1.2,2.7,2.7,2.7h5.4V26
		c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-0.9h0v-1.2v-1.8V11.6l0,0V6.4h0v-3h0V2z M6.2,22.1v-1.7l5.1-5.9v7.6H6.2z"
    />
  </svg>
);

export default Comparacao;

import React from "react";

const Adicionar = (props) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  >
    <circle style={{ opacity: 0.15 }} cx="14" cy="14" r="12.7" />
    <path
      d="M14,2C7.4,2,2,7.4,2,14s5.4,12,12,12s12-5.4,12-12S20.6,2,14,2z M18.8,15.2h-3.6v3.6c0,0.7-0.5,1.2-1.2,1.2l0,0
	c-0.7,0-1.2-0.5-1.2-1.2v-3.6H9.2C8.5,15.2,8,14.7,8,14l0,0c0-0.7,0.5-1.2,1.2-1.2h3.6V9.2C12.8,8.5,13.3,8,14,8l0,0
	c0.7,0,1.2,0.5,1.2,1.2v3.6h3.6c0.7,0,1.2,0.5,1.2,1.2l0,0C20,14.7,19.5,15.2,18.8,15.2z"
    />
  </svg>
);

export default Adicionar;

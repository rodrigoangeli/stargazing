import React from "react";

const Posts = (props) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  >
    <path
      d="M24.2,6h-2.3V3.8c0-1.4-1.2-2.6-2.6-2.6H3.8c-1.4,0-2.6,1.2-2.6,2.6v15.5c0,1.4,1.2,2.6,2.6,2.6h2.3v2.2
      c0,1.4,1.2,2.6,2.6,2.6h15.5c1.4,0,2.6-1.2,2.6-2.6V8.7C26.8,7.2,25.7,6,24.2,6z M4.2,4.2h14.8V19H4.2V4.2z M23.8,23.8H9.1V22h10.2
      c1.4,0,2.6-1.2,2.6-2.6V9h1.9V23.8z"
    />
  </svg>
);

export default Posts;

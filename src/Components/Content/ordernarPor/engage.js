import React from "react";
import ordenarColuna from "../../../Functions/ordenarColuna";

const Engage = () => {
  return (
    <span
      onClick={() => {
        this.setState((prevState) => ({
          con: {
            ...prevState.con,
            postsSorteados: ordenarColuna("engage", this.state.con.posts),
          },
        }));
      }}
    >
      Engajamento
    </span>
  );
};

export default Engage;

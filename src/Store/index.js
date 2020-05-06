import { createStore } from "redux";

function reducer() {
  return [
    {
      data: "22-22",
      id: 1,
    },
    {
      data: "20-20",
      id: 2,
    },
  ];
}

const ex = {
  configs: [],
  con: {
    usernames: ["verbojuridico", "verbomed"],
  },
};

const store = createStore(reducer);

export default store;

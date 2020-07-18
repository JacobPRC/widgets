import React from "react";

import Accordion from "./components/Accordion";

const items = [
  {
    title:
      "What is your stance on police brutality and the recent protests over George Floyd",
    content: "Fuck the Police",
  },
  {
    title:
      "What are your views on Trump and the current politica situation in America?",
    content: "Kill Your Masters",
  },
  {
    title: "Who Do You Love?",
    content: "Bo Diddley?",
  },
];

export default () => {
  return (
    <div>
      <h1>Thought provoking questions to get to know the developer</h1>
      <Accordion items={items} />
    </div>
  );
};

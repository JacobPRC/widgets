import React, { useState } from "react";

import Search from "./components/search/Search";
import Dropdown from "./components/dropdown/Dropdown";
import Accordion from "./components/accordion/Accordion";
import Translate from "./components/translate/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

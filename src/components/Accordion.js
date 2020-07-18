import React, { useState } from "react";

import Item from "./Item";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => setActiveIndex(index);

  const isActive = (index) => (index === activeIndex ? "active" : "");

  const renderedItemComponent = items.map((item, index) => (
    <Item
      isActive={isActive(index)}
      onClick={() => onTitleClick(index)}
      onDblClick={() => onTitleClick(null)}
      title={item.title}
      content={item.content}
    />
  ));
  return (
    <div className="ui styled accordion">
      <div>{renderedItemComponent}</div>
    </div>
  );
};

export default Accordion;

import React from "react";
// props: isActive, onClick, onDblClick title, content
const Item = (props) => {
  return (
    <React.Fragment key={props.title}>
      <div
        className={`title ${props.isActive}`}
        onClick={props.onClick}
        onDoubleClick={props.onDblClick}
      >
        <i className="dropdown icon"></i>
        {props.title}
      </div>
      <div className={`content ${props.isActive}`}>
        <p>{props.content}</p>
      </div>
    </React.Fragment>
  );
};

Item.defaultProps = {
  title: "dick",
};

export default Item;

import React from "react";

const Item = (props) => {
  return (
    <div key={props.pageid} className="item">
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org/?curid=${props.pageid}`}
          target="_blank"
        >
          Go!
        </a>
      </div>
      <div className="content">
        <div className="header">{props.title}</div>
        <span dangerouslySetInnerHTML={{ __html: props.snippet }}></span>
      </div>
    </div>
  );
};

export default Item;

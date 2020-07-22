import React from "react";

const ErrorMessage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>404 Page Address Not Found</h1>
      <div className="ui container">
        <p>Please check the address you typed in to make sure it's correct.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;

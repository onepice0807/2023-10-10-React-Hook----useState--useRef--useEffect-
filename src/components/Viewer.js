import React from "react";

const Viewer = ({ count }) => {
  return (
    <>
      <div>현재 카운트 : </div>
      <h2>{count}</h2>
    </>
  );
};

export default Viewer;

import React from "react";

const CiaoSortedList = (props) => {
  const { sortBy, isUpSort, context } = props;
  return (
    <button onClick={sortBy}>
      Sort by {context} {isUpSort ? "DOWN" : "UP"}
    </button>
  );
};

export default CiaoSortedList;

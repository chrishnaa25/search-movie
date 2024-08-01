import React from "react";
import Box from "./Box";

function Result(props) {
  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        key={index}
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    );
  });
  return <div className="grid md:grid-cols-4 gap-5 w-full h-full">{boxes}</div>;
}

export default Result;

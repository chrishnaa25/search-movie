import React from "react";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Box(props) {
  return (
    <div className="shadow-lg min-h pt-3">
      <img src={IMGPATH + props.image} alt="" className="w-full" />
      <div className="flex justify-between p-3">
        <span className="text-2xl">{props.title}</span>
        <span className="text-xl text-yellow-500 font-bold">
          {props.rating}
        </span>
      </div>
    </div>
  );
}

export default Box;

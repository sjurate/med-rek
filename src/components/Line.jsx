import React from "react";
import Check from "./Check";
import Check2 from "./Check2";

const Line = ({ el, deleteSingleRec }) => {
  return (
    <li className="list-line">
      <div className="li-drug-title line-box">{el.title}</div>
      <div className="li-drug-half line-box">{el.half ? <Check2 /> : ""}</div>
      <div className="li-drug-before_meal line-box">
        {el.before_meal ? <Check2 /> : ""}
      </div>
      <div className="li-drug-morning line-box">
        {el.morning ? <Check /> : ""}
      </div>
      <div className="li-drug-day line-box">{el.day ? <Check /> : ""}</div>
      <div className="li-drug-evening line-box">
        {el.evening ? <Check /> : ""}
      </div>
      <button
        className="btn--delete-single-rec"
        onClick={() => deleteSingleRec(el.id)}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </li>
  );
};

export default Line;

import React from "react";
import { features } from "../Constants";

export default function Hero() {
  return (
    <div>
      {features.map((data) => {
        return (
          <div>
            <img src={data.icon} alt="" />
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
        );
      })}
    </div>
  );
}

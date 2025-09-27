import React from "react";
import { socialMedia } from "../Constants/index";
export default function Billing() {
  return (
    <div>
      {socialMedia.map((Media) => {
        return (
          <div className="grid cols-one grid cols-2 grid cols-3">
            <h1>{Media.id}</h1>
            <img className="bg-blue-500 p-2" src={Media.icon} alt="" />
            <p className="text-red-600">{Media.Link}</p>
          </div>
        );
      })}
    </div>
  );
}

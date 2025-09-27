import React from "react";
import { stats } from "../Constants";
export default function Stats() {
  return (
    <div>
      {stats.map((include) => {
        return (
          <div>
            <h2>{include.id}</h2>
            <h3>{include.title}</h3>
            <h1>{include.value}</h1>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import { footerLinks } from "../Constants";
export default function () {
  return (
    <div>
      {footerLinks.map((finsh) => {
        return (
          <div>
            <h1>{finsh.title}</h1>
            <h2>{finsh.name}</h2>
            <ul>
              <li>{finsh.Links}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

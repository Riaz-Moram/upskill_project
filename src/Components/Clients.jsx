import React from "react";

import { clients } from "../Constants/index";
export default function Clients() {
  return (
    <>
      <div>
        {clients.map((value) => {
          return (
            <div className=" grid grid cols-1 grid cols-2 grid cols-3">
              <h1>{value.id}</h1>
              <img src={value.Logo} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

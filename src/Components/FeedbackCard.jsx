import React from "react";
import { feedback } from "../Constants";
export default function FeedbackCard() {
  return (
    <div>
      {feedback.map((feed) => {
        return (
          <div>
            <h2>{feed.id}</h2>
            <p>{feed.content}</p>
            <h1>{feed.name}</h1>
            <h1>{feed.title}</h1>
            <img src={feed.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}

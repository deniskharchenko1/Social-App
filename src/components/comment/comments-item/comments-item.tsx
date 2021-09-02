import React, { FC } from "react";

import "./comments-item.css";

type PropsType = {
  commentsData: {
    name: string;
    id: number;
    body: string;
    email: string;
  };
};

const CommentsItem: FC<PropsType> = ({ commentsData }) => {
  return (
    <div className="list-group-item" key={commentsData.id}>
      <p className="comments-list title">{commentsData.name}</p>{" "}
      {commentsData.id}
      <p>{commentsData.body}</p>
      <p className="comments-list email">{commentsData.email}</p>
    </div>
  );
};

export { CommentsItem };

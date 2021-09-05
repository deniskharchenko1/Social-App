// @ts-ignore
import React, { FC } from "react";
import "./post-item.css";
import { Link } from "react-router-dom";

import { PostType } from "../../../redux/posts/type";

type PropsType = {
  postData: PostType;
};

const PostItem: FC<PropsType> = ({ postData }) => {
  return (
    <div className="list-group-item" key={postData.id}>
      <p className="post-list title">{postData.title}</p> {postData.id}
      <p>{postData.body}</p>
      <Link to={`/comments/${postData.id}`}>Посмотреть комментарии</Link>
    </div>
  );
};

export { PostItem };

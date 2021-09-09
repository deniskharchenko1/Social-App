import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header: FC = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Social App</Link>
      </h3>
      <div>
        <Link className="mr-3" to="/people">
          People
        </Link>
        <Link className="mr-3" to="/posts">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Header;

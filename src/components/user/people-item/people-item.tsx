import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./people-item.css";

import { UserType } from "../../../redux/users/type";

type PropsType = {
  peopleData: UserType;
};

const PeopleItem: FC<PropsType> = ({ peopleData }) => {
  return (
    <li className="list-group-item">
      <p>{peopleData.name}</p>
      <Link to={`/people/${peopleData.id}`}>Посмотреть пользователя</Link>
    </li>
  );
};

export { PeopleItem };

import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../../spinner";
import { Alert } from "../../alert/alert";
import "./people-list.css";
import { PeopleItem } from "../people-item";
import { getUsers } from "../../../redux/users/actions";
import { RootStateType } from "../../../redux/type";

// debugger;
const PeopleList: FC = () => {
  const {
    fetchedUsers: users,
    isLoading,
    error,
  } = useSelector((state: RootStateType) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="col-md-6">
        <ul className="item-list list-group">
          {users.map((user) => (
            <PeopleItem key={user.id} peopleData={user} />
          ))}
        </ul>
      </div>
      {error && <Alert />}
    </>
  );
};

// debugger;

export { PeopleList };

import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../../spinner";
import { Alert } from "../../alert/alert";
import "./people-list.css";
import { PeopleItem } from "../people-item";
import { getUsers } from "../../../redux/users/actions";
// import { UserType } from "../../../redux/users/type";
import RootStoreType from "../../app";

const PeopleList: FC = () => {
  const users = useSelector(
    (state): RootStoreType => state.usersReducer.fetchedUsers
  );
  const isLoading = useSelector(
    (state): RootStoreType => state.usersReducer.isLoading
  );
  const error = useSelector((state): RootStoreType => state.usersReducer.error);

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
      {error && <Alert message={error} />}
    </>
  );
};

export { PeopleList };

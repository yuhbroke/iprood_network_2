import React from "react";
import { connect } from "react-redux";
import {
  follow,
  // setCurrentPage,
  unfollow,
  // toggleFollowingProgress,
  getUsers,
} from "../../redux/users_reducer";
import Users, { MapDispatchPropsType, MapStatePropsType } from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/users_selectors";
import { AppStateType } from "../../redux/redux_store";

type OwnPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void;
  isFetching: boolean;
};

class UsersContainer extends React.Component<
  MapStatePropsType & MapDispatchPropsType & OwnPropsType
> {
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users follow={this.props.follow} unfollow={this.props.unfollow} />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.ComponentType>(
  AuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersContainer);

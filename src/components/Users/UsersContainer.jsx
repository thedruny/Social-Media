import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUser } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
      componentDidMount() {
            this.props.getUser(this.props.currentPage, this.props.pageSize);
      }

      onPageChanged = (pageNumber) => {
            this.props.getUser(pageNumber, this.props.pageSize);
      };

      render() {
            return (
                  <>
                        {this.props.isFetching ? <Preloader /> : null}
                        <Users totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              selectedPages={this.props.selectedPages}
                              onPageChanged={this.onPageChanged}
                              users={this.props.users}
                              follow={this.props.follow}
                              unfollow={this.props.unfollow}
                              followingInProgress={this.props.followingInProgress}
                        />
                  </>
            );
      }
}

let mapStateToProps = state => {
      return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress
      };
};

export default compose(
      withAuthRedirect,
      connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUser })
)(UsersContainer)
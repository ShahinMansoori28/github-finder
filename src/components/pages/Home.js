import React,{Fragment} from 'react'
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import { Fragment } from "react";

const Home = () => {
  return (
    render(props) (
        <Fragment>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users
            loading={this.state.loading}
            users={this.state.users}
          />
        </Fragment>
      )
  );
}

export default Home

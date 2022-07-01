import React from "react";
import propTypes from 'prop-types'
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="a btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propeType = {
    user: propTypes.object.isRequired
}

export default UserItem;

//import React, { Component } from "react";

// class UserItem extends Component {
//   constructor() {
//     super();
//     this.state = {
//       id: "id",
//       login: "mojombo",
//       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//       html_url: "https://github.com/mojombo",
//     };
//   }

//   render() {
//     const {login, avatar_url, html_url} = this.state;
//     //to get rid of this keyword

//     return (
//       <div className="card text-centre">
//         <img
//           src={this.state.avatar_url}
//           alt=""
//           className="round-img"
//           style={{ width: "60px" }}
//         />
//         <h3>{this.state.login}</h3>
//         <div>
//           <a
//             href={this.state.html_url}
//             className="a btn btn-dark btn-sm my-1"
//           ></a>
//         </div>
//       </div>
//     );
//   }
// }

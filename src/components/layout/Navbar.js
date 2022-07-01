import React from "react";
import propTypes from "prop-types"; // checking props
import { Link } from "react-router-dom";


const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default Navbar;

// class Navbar extends Component {

//   static defaultProps = {
//     title : "Github Finder",
//      icon : "fab fa-github" // default props will taKE over if not added in component Navbar
//   }

//   static PropTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i className={this.props.icon} />
//           {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }

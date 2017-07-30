import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
  return (
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="navbar-header">
            <Link to="/" className="navbar-brand">Course Manager</Link>
        </div>
        <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        </ul>
        <ul className="nav navbar-nav">
            <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
        <ul className="nav navbar-nav">
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
        </ul>
    </nav>
  );
};

export default Navigation;
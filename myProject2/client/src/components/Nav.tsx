import React from 'react';
import { NavLink } from 'react-router-dom'; // react-router-dom for routing


// Component Declaration:
// const Nav: React.FC = () => { ... }; declares a functional React component 
// named Nav typed with React.FC, which is shorthand for React.FunctionComponent. 
// This means it’s a function component without props specified in this case.
const Nav: React.FC = () => {


  // Navigation Items Array:
  // creates an array of objects, each representing a navigation item. 
  // Each object has a name (display text) and a path (URL route) that will be used as a link destination.

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Saved Candidates', path: '/saved' },
  ];


  // Return Statement:
  // The return statement contains JSX, which represents the component's structure.
  return (

    // JSX Structure:
    // The <nav className="nav"> wraps the entire navigation menu. 
    // Inside this <nav>, there’s an unordered list (<ul>), which will contain individual list items (<li>).

    <nav className="nav">
      <ul>

      {/* Mapping Over navItems:
        {navItems.map(item => ( ... ))} iterates over navItems using the map function. For each item in navItems, it creates a list item (<li>), where:
        key={item.name} provides a unique key, which React needs for tracking each element in lists.
        className="nav-item" sets a CSS class for each <li> element for styling purposes. */}

        {navItems.map(item => (
          <li key={item.name} className="nav-item">


            {/* NavLink Component:
            <NavLink> is from react-router-dom. It’s used for navigation between routes in a single-page application. 
            It allows to={item.path}, which makes the link go to the specified path.
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} dynamically sets the 
            CSS class based on whether the link is currently active (i.e., if the current URL matches item.path). 
            If active, it applies both nav-link and active classes; otherwise, it only applies nav-link.               */}

            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.scss"

const Menu = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li><Link to="/hello-world">Hello World</Link></li>
        <li><Link to="/jsx1">JSX1</Link></li>
        <li><Link to="/jsx2">JSX2</Link></li>
        <li><Link to="/jsx3">JSX3</Link></li>
        <li><Link to="/jsx4">JSX4</Link></li>
        <li><Link to="/jsx5">JSX5</Link></li>
        <li><Link to="/jsx6">JSX6</Link></li>
        <li><Link to="/jsx7">JSX7</Link></li>
        <li><Link to="/clock1">Clock1</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/image">Image</Link></li>
        <li><Link to="/practice">Practice</Link></li>
        <li><Link to="/profile-card">Profile Card</Link></li>
        <li><Link to="/bootstrap-static">Bootstrap Static</Link></li>
        <li><Link to="/bootstrap-dynamic">Bootstrap Dynamic</Link></li>
        <li><Link to="/icon">Icon</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/stateless">Stateless</Link></li>
        <li><Link to="/state">State</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/homework">Homework</Link></li>
        <li><Link to="/homework1">Homework1</Link></li>
        <li><Link to="/homework2">Homework2</Link></li>
        <li><Link to="/birthday1">Birthday1</Link></li>
        <li><Link to="/birthday">Birthday</Link></li>
        <li><Link to="/useeffect1">UseEffect1</Link></li>
        <li><Link to="/useeffect2">UseEffect2</Link></li>
        <li><Link to="/useeffect3">UseEffect3</Link></li>
        <li><Link to="/useeffect4">UseEffect4</Link></li>
        <li><Link to="/clock4">Clock4</Link></li>
        <li><Link to="/country-filter">Country Filter</Link></li>
        <li><Link to="/useref">UseRef</Link></li>
        <li><Link to="/scroll">Scroll</Link></li>
        <li><Link to="/class-comp">Class Component</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/user-cards">User Cards</Link></li>
        <li><Link to="/axios">Axios</Link></li>
        <li><Link to="/countries">Countries</Link></li>
        <li><Link to="/parent-comp">Parent Component</Link></li>
        <li><Link to="/form1">Form1</Link></li>
        <li><Link to="/form2">Form2</Link></li>
        <li><Link to="/form3">Form3</Link></li>
        <li><Link to="/form4">Form4</Link></li>
        <li><Link to="/formik">Formik</Link></li>
        <li><Link to="/form5">Form5</Link></li>
        <li><Link to="/form6">Form6</Link></li>
        <li><Link to="/form7">Form7</Link></li>
        <li><Link to="/todo-app">Todo App</Link></li>
        <li><Link to="/exchange">Exchange</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;

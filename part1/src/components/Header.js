import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>
}

export default Header
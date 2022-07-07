import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return <div>
    <h2>Home</h2>
    <Link to="/">Home</Link>;
    <br/>
    <Link to="host">host</Link>;
    <br/>
    <Link to="listings">listings</Link>;
    <br/>
    <Link to="listing">listing</Link>;
    <br/>
    <Link to="user">user</Link>;
    <br/>
  </div>;
};

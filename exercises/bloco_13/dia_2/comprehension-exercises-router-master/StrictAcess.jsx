import React from 'react';
import { Redirect } from 'react-router';

const StrictAcess = ({ username, password }) => {
  if (/joao/.test(username) && /1234/.test(password)) {
    return <p>Welcome joao!</p>;
  }
  alert('Acess denied');
  return <Redirect to='/' />;
};

export default StrictAcess;

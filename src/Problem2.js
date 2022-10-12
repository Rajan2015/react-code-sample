import './App.css';
import React from 'react';

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  
  function Problem2() {
    const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);
  
    return (
      <>
      <h4>  Challenge: Display all users to the browser</h4>
      <h5>User names</h5>
      <ul>{userItems}</ul>
    </>
    );
  }

export default Problem2;

import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ view, setView }) => {
  return (
    <nav className="navbar">
      <h1>Inventory Stats</h1>
      <div className="view-switch">
        <label>
          <input
            type="radio"
            name="view"
            value="admin"
            checked={view === 'admin'}
            onChange={() => setView('admin')}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="view"
            value="user"
            checked={view === 'user'}
            onChange={() => setView('user')}
          />
          User
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
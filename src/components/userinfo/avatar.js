import React from 'react';
import './avatar.css';

const Avatar = () => (
  <div className="avatardiv">
    <img
      // eslint-disable-next-line no-undef
      src={require('../../assets/avatar.jpg')}
      alt="avatar"
      className="avatar"
    ></img>
  </div>
);

export default Avatar;

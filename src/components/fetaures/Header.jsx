import React from 'react';
import userImageDefault from "../../assets/images/user/user-img.png"

const Header = ({ content, subcontent, image=userImageDefault }) => {
  return (
    <div className="header">
      <div className="left">
        <div className="content">{content}</div>
        <div className="subcontent">{subcontent}</div>
      </div>
      <div className="right">
        <img src={image} alt="Header image" width={80} height={80} />
      </div>
    </div>
  );
};

export default Header;

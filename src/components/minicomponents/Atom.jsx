import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";


export const ListItem = ({ image, text, className }) => {
  return (
    <li className={`list-item ${className}`}>
      {image && <img src={image} alt={text} className="list-icon"  width={40} height={40}/>}
      <span>{text}</span>
    </li>
  );
};


export const NavItem = ({ item, openMenus, toggleMenu }) => {
    
  return (
    <li key={item.id} className="navli-bar" onClick={(e) => toggleMenu(item.id, e)}>
      <div className="navbar-li-parent">
        <img src={item.icon} alt="navbar icons" width={25} height={25} />
        {item.name}
        {item.children && (
          <span>{openMenus[item.id] ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</span>
        )}
      </div>

      {item.children && openMenus[item.id] && (
        <ul>
          {item.children.map((child, index) => (
            <li key={index}>
              <img src={child.icon} alt="navbar icons" width={25} height={25} />
              {child.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};


export const NavMenu = ({ routes, openMenus, toggleMenu }) => {
  return (
    <nav>
      <ul>
        {routes.map((data) => (
          <NavItem key={data.id} item={data} openMenus={openMenus} toggleMenu={toggleMenu} />
        ))}
      </ul>
    </nav>
  );
};


export const ProfilePicture = ({ image, onClick }) => {
  return (
    <div className="profile-picture">
      <h2>Edit Profile</h2>
      <img src={image} alt="Profile" className="profile-image" />
    </div>
  );
};

export const ProfileList = ({ data }) => {
  return (
    <div className="profile-container">
      {data?.Profile?.map((section, index) => (
        <div key={index} className="profile-section">
          <h3 className="profile-title">{section.title}</h3>
          <ul className="profile-items">
            {section.items.map((item, i) => (
              <ListItem 
                key={i} 
                text={item.text} 
                image={item.image ? item.image : null} // Prepend global path
                className="custom-item-class" 
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}; 


export const FloorList = ({data}) => {
  return (
    <div className="floor-list">
      {data.map((floor) => (
        <div className="floor-item" key={floor.id}>
          <div className="floor-icon">
            <img
              src={floor.icon}
              alt={floor.title}
              
              width={28}
              height={23}
            />
          </div>
          <span className="floor-title">{floor.title}</span>
        </div>
      ))}
    </div>
  );
};



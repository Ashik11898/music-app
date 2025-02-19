import React, { useState } from "react";
import { ProfilePicture } from "../minicomponents/atom";
import EditableForm from "./EditableForm";

const EditProfile = ({ image, name, email, password, onImageChange }) => {
  const [readOnly, setReadOnly] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '********',
    image: '/src/assets/images/user/user-img.png',
  });

  const fields = [
    { label: 'Name', type: 'text', value: user.name },
    { label: 'Email', type: 'email', value: user.email },
    { label: 'Password', type: 'password', value: user.password },
  ];

  const handleEditProfilePicture = () => {
    console.log('Edit profile picture clicked');
    // Add functionality to edit profile picture (e.g., open a modal or file input)
  };

  const handleSubmit = (formData) => {
    setUser(formData);
    setReadOnly(true); // Switch back to read-only mode after saving
  };

  const handleCancel = () => {
    setReadOnly(true); // Reset to read-only mode
  };

  const handleEdit = () => {
    setReadOnly(!readOnly);
  };

  return (
    <div className="edit-profile-container">
        <ProfilePicture
            image={user.image}
            name={user.name}
            email={user.email}
            onEditProfilePicture={handleEditProfilePicture}
        />

      <div className="profile-form-section">
        <h2 style={{textAlign:"right"}}>Edit</h2>
        <EditableForm fields={fields} onEdit={handleEdit} readOnly={readOnly} />
      </div>
    </div>
  );
};

export default EditProfile;

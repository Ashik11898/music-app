import React, { useState } from "react";

const EditableForm = ({ fields, onSubmit, readOnly }) => {
  
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
        acc[field.label] = field.value;
        return acc;
        }, {})
    );

  const handleChange = (fieldLabel, value) => {
    setFormData({
      ...formData,
      [fieldLabel]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the parent component's onSubmit handler with formData
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div className="form-group" key={index}>
            
          <label>{field.label}</label>
          <input
            type={field.type}
            value={formData[field.label] || ""}
            readOnly={readOnly}
            onChange={(e) => handleChange(field.label, e.target.value)}
          />
        </div>
      ))}
      {/* <div className="form-actions">
        <button type="submit" className="edit-button">
          {readOnly ? "Edit" : "Save"}
        </button>
        {!readOnly && (
          <button type="button" className="cancel-button" onClick={() => setFormData(fields.reduce((acc, field) => {
            acc[field.label] = field.value;
            return acc;
          }, {}))}>
            Cancel
          </button>
        )}
      </div> */}
    </form>
  );
};

export default EditableForm;

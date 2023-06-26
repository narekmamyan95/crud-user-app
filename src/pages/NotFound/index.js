import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="notFound_container">
      <h1>Page Not Found... </h1>
      <label>:-(</label>
      <button type="primary" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;

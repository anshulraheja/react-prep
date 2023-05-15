// Approach 2: In this we call this component so each employee will have its own state variable
import React, { useState } from 'react';

const ToggleButton = ({ id }) => {
  const [currentStatus, setCurrentStatus] = useState(true);
  const handleToggleStatus = () => {
    setCurrentStatus(!currentStatus);
  };

  return (
    <button onClick={() => handleToggleStatus()}>
      {currentStatus ? 'Online' : 'Offline'}
    </button>
  );
};

export default ToggleButton;

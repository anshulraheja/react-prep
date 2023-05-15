// learners bucket
import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

const StatusToggle = (props) => {
  const { coworkers } = props;

  const initialState = coworkers?.reduce((acc, curr) => {
    const name = curr.first_name + curr.last_name;
    acc[name] = true;
    return acc;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);

  const toggleEmployeeStatus = (name) => {
    setEmployeeStatus({
      ...employeeStatus,
      [name]: !employeeStatus[name],
    });
  };

  return (
    <div>
      {coworkers?.map((coworker, index) => {
        const name = coworker.first_name + coworker.last_name;
        return (
          <li key={index}>
            <span>{coworker.first_name}</span>
            <span>{coworker.last_name}</span>
            <button onClick={() => toggleEmployeeStatus(name)}>
              {employeeStatus[name] ? 'Online' : 'Offline'}
            </button>
          </li>
        );
      })}
    </div>
  );
};

StatusToggle.defaultProps = {
  coworkers: [
    {
      first_name: 'anshul',
      last_name: 'raheja',
    },
    {
      first_name: 'rahul',
      last_name: 'raj',
    },
    {
      first_name: 'ramesh',
      last_name: 'singh',
    },
  ],
};

export default StatusToggle;

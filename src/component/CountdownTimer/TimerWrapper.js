import React, { useState } from 'react';
import CountdownTimer from '.';

const TimerWrapper = ({ duration, onExpire }) => {
  const [hasExpired, setHasExpired] = useState(false);

  const restartHandler = () => {
    setHasExpired(false);
  };

  const onExpireHelper = () => {
    setHasExpired(true);
    console.log('Expired');
  };

  return !hasExpired ? (
    <CountdownTimer duration={duration} onExpire={onExpireHelper} />
  ) : (
    <button onClick={restartHandler}>Restart</button>
  );
};

TimerWrapper.defaultProps = {
  duration: 24 * 60 * 60 * 1000,
  onExpire: () => alert('Expired'),
};

export default TimerWrapper;

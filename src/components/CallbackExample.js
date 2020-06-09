import React, { useRef } from 'react';

const CallbackExample = ({ someValue }) => {
  const renders = useRef(0);

  // Increment on renders
  renders.current++;

  return (
    <div>
      <p>this is how many times I've rendered: {renders.current}</p>
    </div>
  );
};

export default CallbackExample;

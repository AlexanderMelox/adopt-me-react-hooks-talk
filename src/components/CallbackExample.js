import React, { useRef } from 'react';

const CallbackExample = () => {
  const renders = useRef(0);

  return (
    <div>
      <p>this is how many times I've rendered: {renders.current++}</p>
    </div>
  );
};

export default React.memo(CallbackExample);

import React from 'react';
import { format } from '../utils/numberUtils';

const FbpContainer = ({ fbp, feed, feedAmount, fps }) => {
  return (
    <div>
      <p>{format(fbp, 0)}</p>
      <button onClick={feed}>Feed</button>
      <p>{format(feedAmount, 2)} per feeding</p>
      <p>{format(fps, 2)} FPS</p>
    </div>
  );
};

export default FbpContainer;

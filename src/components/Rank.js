import React from 'react';

const Rank = ({ onclick }) => (
  <button className="btn btn-primary rank" name="rank" onClickCapture={onclick}>Rank</button>
);

export default Rank;

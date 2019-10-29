import React from 'react';

const Points = ({ onclick }) => (
  <button className="btn btn-primary points" name="points" onClickCapture={onclick}>Points</button>
);

export default Points;

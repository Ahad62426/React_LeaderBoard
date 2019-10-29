import React from 'react';

const Age = ({ onclick }) => (
  <button className="btn btn-primary age" name="age" onClickCapture={onclick}>Age</button>
);

export default Age;

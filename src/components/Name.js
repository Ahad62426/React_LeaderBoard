import React from 'react';

const Name = ({ onclick }) => (
  <button className="btn btn-primary name" name="name" onClickCapture={onclick}>Name</button>
);

export default Name;

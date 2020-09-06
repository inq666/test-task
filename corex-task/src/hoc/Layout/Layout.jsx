import React from 'react';
import './_layout.scss';

export const Layout = (props) => {
  return (
    <div className="corner-container">
      <div className="corner left-top-corner" />
      <div className="corner right-top-corner" />
      <div className="corner left-bottom-corner" />
      <div className="corner right-bottom-corner" />
      {props.children}
    </div>
  )
}

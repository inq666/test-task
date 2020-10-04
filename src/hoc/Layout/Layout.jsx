import React from 'react';
import './_layout.scss';

export const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="layout left-top-layout" />
      <div className="layout right-top-layout" />
      <div className="layout left-bottom-layout" />
      <div className="layout right-bottom-layout" />
      {props.children}
    </div>
  )
}

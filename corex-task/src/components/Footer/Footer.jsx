import React from 'react';
import './_footer.scss';

export const Footer = () => {
  return (
    <footer>
      <ul className="social__links">
        <li><a className="link__facebook" href="https://www.facebook.com/" /></li>
        <li><a className="link__twitter" href="https://twitter.com/" /></li>
        <li><a className="link__youtube" href="https://www.youtube.com/" /></li>
        <li><a className="link__reddit" href="https://www.reddit.com/" /></li>
      </ul>
    </footer>
  )
}

import React from 'react';
import './_footer.scss';
import { Layout } from '../../hoc/Layout/Layout';

export const Footer = () => {
  return (
    <footer>
      <ul className="social__links">
        <Layout>
          <li><a className="link__facebook" href="https://www.facebook.com/"> </a></li>
        </Layout>
        <Layout>
          <li><a className="link__twitter" href="https://twitter.com/"> </a></li>
        </Layout>
        <Layout>
          <li><a className="link__youtube" href="https://www.youtube.com/"> </a></li>
        </Layout>
        <Layout>
          <li><a className="link__reddit" href="https://www.reddit.com/"> </a></li>
        </Layout>
      </ul>
    </footer>
  )
}

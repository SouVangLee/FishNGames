import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <section className="footer-section">
          <h2>HELP</h2>
          <ul>
            <li>Order Status</li>
            <li>Returns</li>
            <li>Shipping Information</li>
            <li>Product Subscriptions</li>
          </ul>
        </section>

        <section className="footer-section">
          <h2>Picture Credits</h2>
          <ul>
            <li>Unsplash</li>
            <li>Amazon</li>
            <li>BassProShop</li>
          </ul>
        </section>

        <section className="footer-section">
          <h2>About Me</h2>
          <ul className="about-me">
            <a href="https://github.com/SouVangLee"><img className="github-logo" src={window.github}/></a>
            <a href="https://www.linkedin.com/in/sou-vang-tommy-lee-443208198/"><img className="linkedin-logo" src={window.linkedin}/></a>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Footer;
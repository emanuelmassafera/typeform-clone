import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']
  );

  return (
    <Container style={{ y: headerY }}>
      <div className="header-content">
        
        <div className="logo">
          <h1>Typeform</h1>
        </div>

        <nav>
          
          <div className="informations">
            <ul>
              <li>Products</li>
              <li>Templates</li>
              <li>Connect</li>
              <li>Pricing</li>
              <li>Help</li>
              <li>Blog</li>
              <li>Careers</li>
              <li><div>Covid-19</div></li>
            </ul>
          </div>

          <div className="access">
            <button className="primary">Log in</button>
            <button className="secondary">Sign up</button>
          </div>

        </nav>
      </div>
    </Container>
  );
};

export default Header;

import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className="content">
        <div className="content-quote">
          <img src={images.quote} alt="quote" />
          <p className="opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. 
          </p>
        </div>
        <p className="opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="chef-sign">
        <p>Kevin Luo</p>
        <p className="opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;

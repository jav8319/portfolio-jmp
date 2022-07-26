import React from 'react';
import image1 from '../img/handlebars.png';
import image2 from '../img/password generator.png';
import image3 from '../img/weather forecast.png';
import image4 from '../img/coding test.png';


export default function Portfolio() {

  const linkStyle = { Height: '100px', Width: '100px' };

  return (
    <div className="container-fluid">
    <div className="row">
    <h2>Portfolio</h2>
    <div className="col flex">
      <a href="https://github.com/jav8319/the_tech_blog_jmp022"><img src={image1}  style={linkStyle} alt="decorative"></img></a>
      <a href="https://jav8319.github.io/blue-galaxy/Passwgntor.html"><img src={image2}  style={linkStyle} alt="decorative"></img></a>
      <a href="https://jav8319.github.io/scattered_on/"><img src={image3} style={linkStyle} alt="decorative"></img></a>
      <a href="https://jav8319.github.io/sunshine-path/"><img src={image4} style={linkStyle} alt="decorative"></img></a>
    </div>
    </div>
</div>
  );
}

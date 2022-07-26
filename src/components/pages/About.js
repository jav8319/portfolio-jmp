import React from 'react';
import image5 from '../img/PHOTO.png';


export default function About() {
  const linkStyle1 = { Height: '40px', Width: '30px' };
  return (
    <div>
      <h1>About me</h1>
      <img src={image5}  style={linkStyle1} alt="decorative"></img>
      <p>
      Front-end Web Developer with strong math skills and a degree in Material Engineering. Recognized as proactive, resourceful, and persistent problem-solver. I’m looking to leverage my development skills to provide small businesses with web applications that support their metrics. I earned a certificate as a full-stack developer from the University of Toronto where I implemented JavaScript, Node, SQL, HTML, and CSS. 

I recently collaborated on developing a webpage with an agile development approach that featured a log-in/log-out interface. All the webpages were deployed in Github and the second one was also deployed in Heroku.  I have also created an app using object-oriented programming which is a very unique aspect of JavaScript. It is my technical acumen combined with strong leadership and collaborative skills that make me an advantageous candidate for any team.
      </p>
    </div>
  );
}

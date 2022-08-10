import React from 'react';
import imagejmp from '../img/PHOTO.png' ;
const photoStyle={width: '60px'}
// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#3f51b5',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
//   content: {
//     padding: 20,
//   },

//   @media screen and (max-width: 768px) {
//     header, main {
//       flex-direction: column;
//     }
  
//     section {
//       padding-right: 0;
//     }
  
//     aside {
//       width: 100%;
//       text-align: center;
//     }
//   }





// };

export default function About() {
  
  return (
    <div className="row align-items-center justify-content-center py-4 contentBackground aboutheight">
      <div className="col-8">
        <h2 className="py-4">
          About me
        </h2>
        <h4 className="text-justify">
        <img className="rounded float-left pr-2" src={imagejmp} style={photoStyle} alt="decorative"></img>Front-end Web Developer with strong math skills and a degree in Material Engineering. Recognized as proactive, resourceful, and persistent problem-solver. I’m looking to leverage my development skills to provide small businesses with web applications that support their metrics. I earned a certificate as a full-stack developer from the University of Toronto where I implemented JavaScript, Node, SQL, HTML, and CSS. 
    
          I recently collaborated on developing a webpage with an agile development approach that featured a log-in/log-out interface. All the webpages were deployed in Github and the second one was also deployed in Heroku.  I have also created an app using object-oriented programming which is a very unique aspect of JavaScript. It is my technical acumen combined with strong leadership and collaborative skills that make me an advantageous candidate for any team.
        </h4>
      </div>
    </div>






  );
}

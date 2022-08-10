import React from 'react';
import image1 from '../img/password_generator.png';
import image2 from '../img/JavaScript Test.png';
import image3 from '../img/Weather forecast.png';
import image4 from '../img/readme generator.png';
import image5 from '../img/team members.png';
import image6 from '../img/CMS.png';
import image7 from '../img/the tech blog.png';
import image8 from '../img/newsonclick.png';
import image9 from '../img/lofle.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkStyle = { Width: '18rem' };

export default function Portfolio() {

  
 
  return (
    <div className='ontentBackground' >
      <div className="row align-items-center justify-content-center py-4 contentBackground" >
        <div className="col-8">
          <div className="row">
          <div className="col">
          <h2 className="py-4">
            Portfolio
          </h2>
          </div>
          </div>

          <div className="row">
            <div className="col py-2">
              <div className="card d-block" style={{width:'300px'}}>
                <img src={image1} className="card-img-top" alt="decorative" style={linkStyle}></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://jav8319.github.io/blue-galaxy/Passwgntor.html">Password Generator</a><br></br>
                  <a href="https://github.com/jav8319/blue-galaxy.git">source code<br></br></a>JavaScript, HTML</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card" style={{width:'300px'}}>
                <img src={image2} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://jav8319.github.io/sunshine-path/">JavaScript Test</a><br></br>
                  <a href="https://github.com/jav8319/sunshine-path.git">source code</a><br></br>JavaScript, HTML</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card" style={{width:'300px'}}>
                <img src={image3} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://jav8319.github.io/scattered_on/">Weather Forecast</a><br></br>
                  <a href="https://github.com/jav8319/scattered_on.git">source code</a><br></br>JavaScript(server fetch call, Bootstrap), HTML,CSS</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card" style={{width:'300px'}}>
                <img src={image4} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://github.com/jav8319/readme-generator-jav2022.git">Readme Generator</a><br></br>Node.js(inquierer)</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card" style={{width:'300px'}}>
                <img src={image5} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://github.com/jav8319/teamboard_ja22.git">Team members<br></br></a>Node.js inquierer, object orientaion programming , css, HTML</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card" style={{width:'300px'}}>
                <img src={image6} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://github.com/jav8319/CMS_app_jm22.git">Content Management Systems app</a><br></br>SQL, Node.js</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card" style={{width:'300px'}}>
                <img src={image7} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://secret-tundra-30697.herokuapp.com/">The thech blog</a><br></br>
                  <a href="https://github.com/jav8319/the_tech_blog_jmp022.git">source code<br></br></a>SQL(sequilize), Handlebars, Express, Node.js HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-center py-4 contentBackground" >
        <div className="col-8">
          <h4 className="py-4">
            Collborative projects-agile development
          </h4>
          <div className="row">
            <div className="col">
              <div className="card" style={{width:'300px'}}>
                <img src={image8} className="card-img-top" alt="decorative" style={linkStyle}></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://pooja3093.github.io/refactored-succotash-/index.html">OnClick News</a><br></br>
                  <a href="https://github.com/Pooja3093/refactored-succotash-.git">source code</a><br></br>JavaScript, HTML, CSS, Materialize(css framework)</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:'300px'}}>
                <img src={image9} className="card-img-top" alt="decorative"></img>
                <div className="card-body">
                  <p className="card-text"><a href="https://quiet-woodland-99342.herokuapp.com/">League of Legends LFG</a><br></br>
                  <a href="https://github.com/connor-kfitz/upgraded-meme.git">source code</a><br></br>Handlebars,Node.js, Express, JavaScript, HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>


  );
}

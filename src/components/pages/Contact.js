import React from 'react';

export default function Contact() {
  return (
    <div>
    <div className="row align-items-center justify-content-center pt-4 pb-1 contentBackground" >
      <div className="col-8">
        <h2 className="py-1">
          Contact
        </h2>
      </div>
    </div>
    <div className="row align-items-center justify-content-left py-1 contentBackground" style={{height:'600px'}}>
      <div class="col">
          <form className="contactpos">
              <div className="form-group">
                <label for="name">Name</label>
                <input type="name" className="form-control" id="name" placeholder="Name"></input>
              </div>
              <div className="form-group">
                  <label for="emailInput">Email address</label>
                  <input type="email" className="form-control" id="emaiInput" placeholder="name@example.com"></input>
                </div>
  
              <div className="form-group">
                <label for="Textarea">Messagge</label>
                <textarea className="form-control" id="Textarea" rows="3"></textarea>
              </div>
              <input className="btn btn-primary" type="submit" value="Submit"></input>
          </form>
      </div>
    </div>
  </div>

  );
}

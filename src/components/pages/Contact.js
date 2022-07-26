import React from 'react';

export default function Contact() {
  return (
    <div className="container">
    <div className="row">
        <div className="col">
            <h2>Contact</h2>
            <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Name</label>
                  <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="name"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                  </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Messagge</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                  </div>

              </form>
        </div>
    </div>
</div>
  );
}

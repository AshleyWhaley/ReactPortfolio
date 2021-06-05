import React from "react";
import Me from "../../image/me.jpg";

function AboutCard() {
  return (
    <div className="container dark">
      <div className="card is-centered mb-5">
        <p className="title">About Me</p>
          <div className="card-body">
          <img className="img-responsive float-left mb-3" width="250px" height="260px" src={Me}></img>


          <p className="mt-3">Hello World! My name is Ashley Whaley</p>
          <p>I currently work for Dealers Auto Auction Seattle as an Arbitration Administrator for 3 years. I handle all the fun problems that come with selling a vehicle that has been guaranteed by our standards which also complies with the National Auto Auction Association standards.</p>
          <p>I've always had a quiet passion for video games and roleplay, which is why I would love to start a career in font end game programming. I believe I can bring fresh ideas and a great attitude to this field.</p>
          <p>There are a few accomplishments in my current field I have acquired such as become the top go to employee for 5 different departments, I am heavily relayed on for advise when discussing better efficiency for other departments and traveled to our sister auction in Spokane,WA to assist. At the end of the day though, I just want to make video games more accessibly and add creative details.</p>
          </div>
      </div>
    </div>
  );
}

export default AboutCard;
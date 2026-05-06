import React from 'react';
import { Link } from 'react-router-dom';
import pastorNat from '../assets/nathan_rickner.png';
import pastorGab from '../assets/gabriel_vazquez.png';
import pastorRan from '../assets/randall_rickner.png';


function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-8">
          <h3>Our Story</h3>
          <p>
            Faith Independent Baptist Church was founded in August of 2001, with the very first service held in the living room of our founding pastor, Dr. Myron McIntyre. 
            From those humble beginnings, God began to bless and grow this new church plant in remarkable ways.
          </p>
          <p>
            Shortly after our launch, God provided a storefront location off Hampton Street near the McDonough Square, where we held our first public services. 
            In 2005, the Lord opened yet another door—miraculously allowing us to purchase an existing church building on Highway 81 in McDonough. This continues 
            to be our home, where we gather each week to worship, learn, and serve.
          </p>
          <p>
            Over the years, God has grown our church—not only in number but also in depth. Through faithful preaching, Bible teaching, personal discipleship, outreach, 
            and counseling, our church family has matured spiritually, rooted in the unchanging truths of God’s Word.
          </p>
          <p>
            In March of 2025, after more than two decades of faithful service, Dr. McIntyre followed God’s leading to step down as pastor and pursue new avenues of ministry. 
            In May of 2025, the church voted to call Pastor Randall Rickner as our next pastor.
          </p>
          <p>
            With a renewed vision to reach the lost, disciple believers, and impact our community for Christ, we now move forward with joy and anticipation—trusting God to 
            continue working through Faith Independent Baptist Church for the advancement of the Gospel.
          </p>
          
          <h3 className="mt-5">Our Beliefs</h3>
          <ul className="list-group list-group-flush mb-4">
            <h5>The Bible</h5>
            <li className="list-group-item">We believe the Holy Scriptures of the Old and New Testaments to be the verbally (every word) and plenarily (completely) inspired Word of God. 
              The Scriptures are inerrant, infallible and God-breathed, and therefore are the final authority for faith and life. The sixty-six books of the Old and New Testaments are 
              the complete and divine revelation of God to man (II Timothy 3:16-17; II Peter 1:20-21). [Note: For reasons of textual reliability, we promote and use the King James Version 
              of the Bible in our English-speaking services.]</li>
            <h5>The Godhead</h5>
            <li className="list-group-item">We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. We believe God the Father is perfect in holiness, 
              boundless in love, infinite in wisdom, and measureless in power. We believe that He concerns Himself mercifully in the affairs of men; that He hears and answers prayers; and 
              that He saves from sin and death all who come to Him through Jesus Christ, His Son. We believe He is worthy of all our honor, confidence, and love. (Based on Deuteronomy 6:4; 
              Exodus 20:2-3; I Corinthians 8:6; II Corinthians 13:14; I John 5:7; Revelation 4:11)</li>
            <li className="list-group-item">We believe in salvation through faith in Jesus Christ</li>
            <li className="list-group-item">We believe in the power of prayer and the work of the Holy Spirit</li>
            <li className="list-group-item">We believe in the Great Commission to share the Gospel</li>
          </ul>

          <h3 className="mt-5">Our Leadership</h3>
          <div className="row g-3 mt-2">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={pastorRan} alt="Pastor Randall Rickner"/>
                </div>
                <div className="card-body">
                  <h5>Pastor Randall Rickner</h5>
                  <p className="text-muted">Pastor</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={pastorNat} alt="Pastor Nathna Rickner"/>
                </div>
                <div className="card-body">
                  <h5>Pastor Nathna Rickner</h5>
                  <p className="text-muted">Associate Pastor</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={pastorGab} alt="Pastor Gabriel Vazquez"/>
                </div>
                <div className="card-body">
                  <h5>Gabriel Vazquez</h5>
                  <p className="text-muted">Spanish Pastor</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h4>Visit Us</h4>
              <p>We'd love to have you join us for worship!</p>
              <Link to="/contact" className="btn btn-light">Plan Your Visit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
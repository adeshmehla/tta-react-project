import React from 'react';
import './aboutUs.css'; 
import { Navbar } from '../component/navbar/navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us">
      
      <h2>About Me</h2>
      <p>
        My name is Adesh Mehla. I am a React developer and I am very excited about the opportunity to work in this field.
        I have a strong knowledge of React.js and am passionate about creating efficient and scalable applications.
      </p>
      <div className="contact-details">
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Name:</strong> Adesh Mehla</li>
          <li><strong>Contact Number:</strong> 8295865880</li>
          <li><strong>Email:</strong> bemehla@gmail.com</li>
          <li><strong>Address:</strong> Vill. siswala, Hisar, haryana</li>
          <li><strong>Job Title</strong> Reactjs Developer</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

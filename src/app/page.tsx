"use client"
import React from 'react';
import Hero from "./_components/Home";

export default function Home() {
  return (
    <>
      {/* <div className="home-section" id="home">
        <h1>HOME</h1>
      </div> */}
      <Hero/>
      <div className="about-section" id="about">
        <h1>ABOUT</h1>
      </div>
      <div className="features-section" id="features">
        <h1>FEATURES</h1>
      </div>
      <div className="contact-section" id="contact">
        <h1>CONTACT</h1>
      </div>
    </>
  );
}

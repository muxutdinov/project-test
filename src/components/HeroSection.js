import React from "react";
import '../root/style.css'
import { Button } from "./Button";
import "./HeroSection.css";
// import video from '../assets/videos/video-2.mp4'
import video from '../assets/videos/video.mp4'

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} avtoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btns-outline"
        >GET STARTED</Button>
         <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btns-primary"
        >WATCH TRAILER <i className='far fa-play-circle' /></Button>
      </div>
    </div>
  );
};
export default HeroSection
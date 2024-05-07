import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import code from "../LottieFiles/code.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.jpeg';
import {CiBurger, CiCoffeeBean, CiCoffeeCup, CiForkAndKnife, CiShop} from "react-icons/ci";
import { MdOutlineDirectionsBike } from "react-icons/md";
import Coder from '../LottieFiles/coder.json';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'm <b>Joshua Castaneda</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={code} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I find great joy in transforming an initial concept into a website or application that has a meaningful impact on people's lives. I aspire to engage in projects that push my abilities as a developer, provide me opportunities to learn and allow me to take pride in my work. In short, I love a good challenge!
          <br/><br />
            I am fluent in <b>C++</b> and know a bit of <b>Python</b> <br />
            I'm learning <b>JavaScript</b>, <b>React</b> and<b> MySQL</b> at the moment. <br /><br />
            
            Also, I love <b>cycling</b>  <MdOutlineDirectionsBike/>
            
          </p>
        </div>
        <Tilt>
             <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
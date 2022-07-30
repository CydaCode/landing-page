import React from 'react'
import { HeroSections, Buttons} from './HeroSection.style'
import NavBar from '../navbar/NavBar'

const HeroSection = () => {
  return (
       <HeroSections >
         <div className='container layout'>
         <div className='hero-image '>
              <img src="/src/assets/heroImage.jpg" alt="" />
          </div> 
          <div className='heropage-text'>
            <h1>Mentoring you from the 
                          basics to Proficiency
            </h1>
            <p>We provide you with a suitable environment for learning 
               while engaging in a systematic approach to imbibe 
               you with the necessary knowledge and skills
            </p>
            <Buttons >
              <div className='buttons'>
              <div className='btn'>
                <button>Join the waitlist for Techathon 2.0 </button>
              </div>
              <div className='arrow'>
                <img src="/src/assets/Vector.png"  alt="" />
              </div>
              </div>
            </Buttons>
          </div>
         </div>
       </HeroSections>

  )
}

export default HeroSection
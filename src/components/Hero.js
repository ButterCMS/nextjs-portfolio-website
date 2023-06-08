// components/Hero.jsx
import Butter from "buttercms";
import React, { useEffect, useState } from "react";

import Image from 'next/image';

const butter = Butter(`${process.env.NEXT_PUBLIC_API_KEY}`);


const Hero = () => {

   const [hero, setHero] = useState({});

   useEffect(() => {
       butter.page
         .retrieve("*", "my-portfolio")
         .then(function (resp) {
           console.log(resp.data.data.fields.hero_section);
           setHero(resp.data.data.fields.hero_section);
   
         })
         .catch(function (resp) {
           console.log(resp);
         });
     }, []);

 return (
   <div className="hero-container">
    <img src={hero?.hero_image} loading="lazy" className="profile-img" width={200} height={200} alt="David personal headshot"/>

     <div className="hero-text">
       <h1>{hero?.headline}</h1>
       <p>
         {hero?.sub_headline}
       </p>
       <div className="social-icons">
         <a
           href="https://twitter.com/olawanle_joel"
           aria-label="Twitter"
           target="_blank"
           rel="noopener noreferrer"
         >
           <i className="fa-brands fa-twitter"></i>
         </a>
         <a
           href="https://github.com/olawanlejoel"
           aria-label="GitHub"
           target="_blank"
           rel="noopener noreferrer"
         >
           <i className="fa-brands fa-github"></i>
         </a>
         <a
           href="https://www.linkedin.com/in/olawanlejoel/"
           aria-label="LinkedIn"
           target="_blank"
           rel="noopener noreferrer"
         >
           <i className="fa-brands fa-linkedin"></i>
         </a>
       </div>
     </div>
   </div>
 )
}

export default Hero;
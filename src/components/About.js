import React from "react";


function About(props) {
    const imgg = props.image;
   
  return (
   <aside>
    <img src={imgg ? imgg : 'https://via.placeholder.com/215'} alt="blog logo" />
    <p> {props.about}</p>
   </aside>
  );

}

export default About;
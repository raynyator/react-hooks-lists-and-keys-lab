import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
   links.map( (index)=>{
    <><a key={index} href="#home">home</a><a key={index} href="#about">about</a><a key={index} href="projects">projects</a></>
   }

   )   
    }</nav>;
}

export default NavBar;

import React from 'react';
import Nav from './Nav';
import Title from './Title';


function MainPageLayout ({children}){
  return (
    <div>
    <Title title="BOX OFFICE" subtitle="Are You Looking for a movie or an actor ?"/>
    <Nav/>
    {children}
   </div>  )
}

export default MainPageLayout
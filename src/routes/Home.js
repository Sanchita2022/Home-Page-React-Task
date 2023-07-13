import React from 'react'
import HeroHeader from "../component/HeroHeader.jsx";
import InfoCard from "../component/InfoCard.jsx";
import FooterBanner from "../component/FooterBanner.jsx";
import CardSlider from "../component/CardSlider.jsx";

const Home = () => {
    const card1_info = 'This year, Institute of Indian Elementary & Technical Education '
  +'7th Year of its presence and endures with its aim of promoting the growth of the nation '
  +'talents\' IIETE has interests with iconic nationwide initiatives such as "State Genius" '
  +'the IIETE strives to identify India\'s future Genius leaders, is an effort by The '
  +'Institute of Indian Elementary & Technical "IIETE" is an initiative from The Skill '
  +'India seeking to extend "excellence in delivery" in the education sector, in order '
  +'to unlock the massive potential of the youth in India.'
  const card2_info = 'This year, Institute of Indian Elementary & Technical Education '
  +'7th Year of its presence and endures with its aim of promoting the growth of the nation '
  +'talents\' IIETE has interests with iconic nationwide initiatives such as "State Genius"'
  return (
    <div>
      <HeroHeader></HeroHeader>
      <InfoCard 
        subtitle = "Know More About"
        title = "Institute of Indian Elementary & Technical Education"
        content = {card1_info}
        image = "./images/Student2.png"
        button = "Read More"
        link = "#"
      />
      <InfoCard 
        subtitle = ""
        title = "Institute of Indian Elementary & Technical Education"
        content = {card2_info}
        image = "./images/Teacher1.png"
        button = "Join Now"
        link = "#"
      />
      <CardSlider/>
      <FooterBanner/>
    </div>
  )
}

export default Home

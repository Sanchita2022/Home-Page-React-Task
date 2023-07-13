import React from "react";
import "./CardSlider.css";

const cards = [
  {
    title: "text 1",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text1"
  },
  {
    title: "text 2",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text2"
  },
  {
    title: "text 3",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text3"
  },
  {
    title: "text 4",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text4"
  },
  {
    title: "text 5",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text5"
  },
  {
    title: "text 6",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text6"
  },
  {
    title: "text 7",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text7"
  },
  {
    title: "text 8",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text8"
  },
  {
    title: "text 9",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text9"
  },
  {
    title: "text 10",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text10"
  },
  {
    title: "text 11",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text11"
  },
  {
    title: "text 12",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text12"
  },
  {
    title: "text 13",
    text: "content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1",
    link: "/text13"
  }
]

const CardSlider = () => {
  return (
    <>
    <div>
      <div className="testimonial"> 
        <p>Testimonials</p>
        <h2><b>Our Students and Parents Love us</b></h2>
      </div>
    </div>
    <div className="CardSlider Banner">
      <div className="inner">
        {cards.map((e,id) => (
          <div key={id} class="card">
            <h2>{e.title}</h2>
            <p>{e.text}</p>
            <a href={e.link}>Visit</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CardSlider;

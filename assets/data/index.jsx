// IMPORTS
import headerImage from "../../public/images/header.jpg";
import aboutImage01 from "../../public/images/about01.jpg";
import aboutImage02 from "../../public/images/about02.jpg";
import hobby_01 from "../../public/images/hobby_01.jpg";
import hobby_02 from "../../public/images/hobby_02.jpg";
import hobby_03 from "../../public/images/hobby_03.jpg";
import gallery_01 from "../../public/images/gal01.jpg";
import gallery_02 from "../../public/images/gal02.jpg";
import gallery_03 from "../../public/images/gal03.jpg";
import gallery_04 from "../../public/images/gal04.jpg";
import gallery_05 from "../../public/images/gal05.jpg";
import gallery_06 from "../../public/images/gal06.jpg";
// HEADER -----------------------------------------------------------------------------
export const homepageHeader = {
  picture: headerImage,
  alt: "patricia vila nova driving service",
  title: "We drive & You smile",
  quote: "We provide more than transport, we create a moment dedicated to you.",
};
// ABOUT ME -----------------------------------------------------------------------------
export const aboutMe = {
  title: "Energy and dedication",
  picture01: aboutImage01,
  picture02: aboutImage02,
  alt01: "sardinha drive",
  alt02: "driving service",
  quote:
    '"Driving besides a passion, is a means to meet new people and share moments."',
};
export const aboutText01 = [
  {
    text: "Driving is so much more than knowing how to manoeuvre a car.",
  },
  {
    text: "I`ve always had a great passion for driving and how I feel so good when I`m with a steering wheel in my hands. A sense of calm and freedom.",
  },
  {
    text: "I drove my first car (Rover) when I was 14 years old and I remember only wishing I was 18 to get my driving license.",
  },
  {
    text: "In short, I like to move around, meet new people, and share stories and listen to people's stories (I'm a good listener), see beautiful places (Switzerland is a paradise) and create memories and collect smiles. I love to see people smiling.",
  },
  {
    text: "For several years, I have always strived to do something that really gives me the motivation to work 200%. Something that would give me the energy to wake up in the morning and go out into the world to fight. I wanted to work, but not just because I had bills to pay, but because it was what made me happy. I wanted quality and not quantity. I didn't want a job, I wanted to work.",
  },
];

export const aboutText02 = [
  {
    text: "And luck (or fate) was always on my side.",
  },
  {
    text: "Life gave me some wonderful parents, who taught me that you must work hard to have something in life. And I followed my father's advice. I left Portugal when I was 19 and went in search of more.",
  },
  {
    text: "Well, the reality was harder than I thought, but nevertheless my willpower didn't let me down.",
  },
  {
    text: "You can follow my professional path on Linkedin.",
  },
  {
    text: "And here I am (like Bryan Adams song) with own business, with my humble and cute car, ready to make many miles every day and making people's lives easier.",
  },
  {
    text: "Each trip represents for us an opportunity to surprise you. Good vibes, energy, sense of humour, friendliness and politeness are among the many qualities that will travel with us (me and my car).",
  },
  {
    text: "I wasn't born with wings to fly, but success isn't always about going up, it's about going forward (and yes, writing, is one of many passions).",
  },
];
// SERVICES -----------------------------------------------------------------------------
export const services = [
  {
    id: 1,
    picture: require("../../public/images/service01.jpg"),
    height: 600,
    width: 400,
    alt: "service 1",
    serviceTitle: "Transfer (Point A to B)",
    serviceText:
      "From Earth to heaven – Well, we can not take to heaven but it similar. Just let us know where we pick you up and where is your destination.",
  },
  {
    id: 2,
    picture: require("../../public/images/service02.jpg"),
    height: 600,
    width: 400,
    alt: "service 2",
    serviceTitle: "Disposal",
    serviceText:
      "Do you need our service for more than 3 hours or for more than 1 day? Do you need to go shopping or travel in Switzerland? Don’t worry, we can help you.",
  },
  {
    id: 3,
    picture: require("../../public/images/service03.jpg"),
    height: 600,
    width: 400,
    alt: "service 3",
    serviceTitle: "Driver Service",
    serviceText:
      "Do you have a car but for some reason you can’t drive or your prefer use your car do the transport? Please, give us the key and we drive your car for you. If you need to take your car to control, or mechanic, we do it for you. Everything for you like Bryan Adams sing.",
  },
  {
    id: 4,
    picture: require("../../public/images/service04.jpg"),
    height: 600,
    width: 400,
    alt: "service 3",
    serviceTitle: "Customer`s cars",
    serviceText:
      "Do you need someone to take your car to mechanic or control? Well, where can I grab the keys?",
  },
  {
    id: 5,
    picture: require("../../public/images/service05.jpg"),
    height: 600,
    width: 400,
    alt: "service 3",
    serviceTitle: "Car trip with guide tour (most by car)",
    serviceText:
      "re you visiting Switzerland? Or do you a relax tour? We can recommend places to see, drive you there and bring you back with great memories.",
  },
];
// PASSIONS -----------------------------------------------------------------------------
export const passions = [
  {
    id: 1,
    imgSrc: hobby_01,
    alt: "hobby",
    classname: "black-font",
    hobbyTitle: "Creative writing",
    hobbyText: `Writing, was my first passion, following music. It has always been the easiest way to express myself and also my refuge. The real me, is really in writing. 
      It was writing, that often relieved the spirit and in 2019 I launched my first book "Reflexos". You can find it online but in portuguese. 
      At school, I always had a natural talent for making poems, it was very easy for me to put words together and make beautiful sentences. I won't even talk about love letters, they were pieces of art (I'm a romantic by nature). 
      I am an artist in many fields, writing (which is the easiest and the best), singing and dancing (but I still have a certain fear of stages), acting and creating. 
      And all these has to be done with music. I eat for energy, but I need music to feed my spirit. I don't live without music.
      Next personal goals - With writing my blog (www.patriciavilanova.com), passion, music comes the second book.`,
    container: "hobby",
  },
  {
    id: 2,
    imgSrc: hobby_02,
    alt: "hobby",
    classname: "black-font",
    hobbyTitle: "Events organization",
    hobbyText: `What do you think? ${<br/>}Is life an event, with several phases or is life a series of events? 
      Since I was a little girl, organisation has been part of my lifestyle, but, however, it is very contradictory because when I am at the beginning of creating something, I am a complete chaos. For example, I am extremely organised with the environments and spaces, but completely disorganised when it comes to creating texts or content. 
      I have my drafts completly desorganized and only then I make it perfect. 
      I like being involved in projects and being surrounded by people. 
      When I worked in Zurich as a secretary, it was one of my favourite tasks. Making sure everything was as planned, welcoming people in, making sure they were settled and i love this feeling of being active and useful. Again, it was meeting new people, communicating and sharing experiences. 
      If you are thinking about an event, don't know where to start or need help just call.`,
    container: "hobby-reverse",
  },
  {
    id: 3,
    imgSrc: hobby_03,
    alt: "hobby",
    classname: "black-font",
    hobbyTitle: "Helping animals cause",
    hobbyText: `Let's get to my most human and sentimental side. Animals. Yes, I cry every time a dog dies in a movie, and my heart aches when I see an animal abandoned or suffering further abuse. There is no love purer and more honest from them. Either they love you or they don't. Animals are real and they can't fake it and they don't have to. I have always grown up with dogs and cats and there is nothing better than their unconditional love. 
      When people ask me what I would do if I won the Euromillions, I always reply that I would buy a farm and go rescue animals, but as I can't save the world that way, I do it as best I can. The important thing is for everyone to do their part and this way we all help. Since 2017, I help the association of my hometown - CAPA (do’s shelter) and I’ve being organizing walks in Switzerland to raise money so they can buy food and treatments for the dogs.  
      I can't imagine, how it is to suffer and without being able to say a word or spend a life in chains. Be humane please.`,
    container: "hobby",
  },
];
// PASSIONS -----------------------------------------------------------------------------
export const gallery = [
  {
    id: 1,
    imgSrc: gallery_01,
    height: 500,
    width: 600,
    alt: "patricia vila nova",
  },
  {
    id: 2,
    imgSrc: gallery_02,
    height: 700,
    width: 600,
    alt: "patricia vila nova",
  },
  {
    id: 3,
    imgSrc: gallery_03,
    height: 600,
    width: 600,
    alt: "patricia vila nova",
  },
  {
    id: 4,
    imgSrc: gallery_04,
    height: 600,
    width: 600,
    alt: "patricia vila nova",
  },
  {
    id: 5,
    imgSrc: gallery_05,
    height: 700,
    width: 600,
    alt: "patricia vila nova",
  },
  {
    id: 6,
    imgSrc: gallery_06,
    height: 500,
    width: 600,
    alt: "patricia vila nova",
  },
];

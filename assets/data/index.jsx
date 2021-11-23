// IMPORTS
import headerImage from "../../public/images/header.jpg";
import aboutMeImage from "../../public/images/aboutMe.jpg";
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
  text: `Each trip represents for us an opportunity to surprise you.
          Good vibes, energy, sense of humour, friendliness and politeness 
          are among the many qualities that will travel with us.
        `,
  picture: aboutMeImage,
  alt: "patricia",
  quote:
    '"Driving besides a passion, is a means to meet new people and share moments."',
};
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
    picture: require("../../public/images/service03.jpg"),
    height: 600,
    width: 400,
    alt: "service 3",
    serviceTitle: "Customers cars appointments",
    serviceText: "",
  },
  {
    id: 5,
    picture: require("../../public/images/service03.jpg"),
    height: 600,
    width: 400,
    alt: "service 3",
    serviceTitle: "Car trip with guide tour(most by car)",
    serviceText: "",
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
    hobbyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.",
    container: "hobby",
  },
  {
    id: 2,
    imgSrc: hobby_02,
    alt: "hobby",
    classname: "black-font",
    hobbyTitle: "Events organization",
    hobbyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.",
    container: "hobby-reverse",
  },
  {
    id: 3,
    imgSrc: hobby_03,
    alt: "hobby",
    classname: "black-font",
    hobbyTitle: "Helping animals cause",
    hobbyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.",
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

import patricia from "../../public/images/homepage/header.png";

import home_01 from "../../public/images/homepage/home_03.jpg";
import home_02 from "../../public/images/homepage/home_02.jpg";
import home_03 from "../../public/images/homepage/home_01.jpg";
import home_04 from "../../public/images/homepage/home_04.jpg";

import { Ri24HoursLine, RiLuggageCartFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

export const header = {
  picture: patricia,
  alt: "patricia vila nova driving service",
  // title: "We drive & You smile",
  title: "A Chauffeur Service tailored to you.",
  quote: "We provide more than transport, we create a moment dedicated to you.",
};

export const pictures = [
  {
    imgSrc: home_01,
    alt: "reinfall",
  },
  {
    imgSrc: home_02,
    alt: "switzerland",
  },
  {
    imgSrc: home_03,
    alt: "zurich",
  },
];

export const about = {
  imgSrc: home_04,
  alt: "switzerland",
  title: "About Us",
  text: `Sardinha Drive is about professionalism, sympathy and reliability.

  We provide a chauffeur service within Zurich and around at any time you require. We are a family service driven to provide services for your family or a more corporate environment.

  We are mountain lovers and with that in mind book us to take you to a mountain and provide a guided tour.

  We are a driving service that takes you anywhere within Switzerland.
`,
};

export const reasons = [
  {
    icon: <Ri24HoursLine />,
    title: "24h Service",
    text: "We are available for you 7 days a week, 24h a day. Whenever you need wherever you require.",
  },
  {
    icon: <GiTakeMyMoney />,
    title: "Fair Price",
    text: "We make sure within our service range the quality is acording to the price.",
  },
  {
    icon: <AiFillCar />,
    title: "Comfort",
    text: "We make sure to have the comfort that you require, for long a short journeys.",
  },
  {
    icon: <MdOutlineFreeCancellation />,
    title: "Cancel for Free",
    text: "Cancel our service up to 24h before booking without any extra costs.",
  },
  {
    icon: <BsPersonCircle />,
    title: "Profissional Driver",
    text: "Our drivers are professional and happy to provide the services you need.",
  },
  {
    icon: <RiLuggageCartFill />,
    title: "Complementary",
    text: "Our Profissionals wait for you if you need extra time and even carry any luggage you might have.",
  },
];

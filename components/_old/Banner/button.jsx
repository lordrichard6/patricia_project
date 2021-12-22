import styled from "styled-components";

import { Colors } from "../../assets/variables";

export default function Button({ name }) {
  return <AniButton className="font-color">{name}</AniButton>;
}

const AniButton = styled.button`
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 2rem;
  font-family: inherit;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); */
  background: linear-gradient(90deg, #085467, #afa7bb, #f4c0b3, #085467);
  background-size: 300%;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1;

  :hover {
    animation: ani 8s linear infinite;
    border: none;
  }

  @keyframes ani {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  :before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); */
    background: linear-gradient(90deg, #085467, #afa7bb, #f4c0b3, #085467);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  :hover::before {
    filter: blur(20px);
  }

  :active {
    /* background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); */
    background: linear-gradient(90deg, #085467, #afa7bb, #f4c0b3, #085467);
  }
`;

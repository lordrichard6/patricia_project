import styled from "styled-components";

import { Colors } from "../../assets/variables";

export default function Button({ name }) {
  return (
    <AniButton className="font-color">
      <button>{name}</button>
    </AniButton>
  );
}

const AniButton = styled.div`
  /* background: linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5);
 background-size: 800% 400%;
 padding: 1.5rem 3rem;
 display: inline-block;
 border: none;
 border-radius: 10px;
 font-size: 3rem;
 font-weight: 700;
 font-family: inherit;
 color: white;
 transition: all .5s ease-in-out;
 animation: gradient 10s infinite cubic-bezier(.62, .28, .23, .99) both;
 cursor: pointer;
}

&:hover {
 animation: gradient 3s infinite;
 transform: scale(1.05);
}

&:active {
 animation: gradient 3s infinite;
 transform: scale(0.8);
}

@keyframes gradient {
 0% {
  background-position: 0% 50%;
 }

 50% {
  background-position: 100% 50%;
 }

 100% {
  background-position: 0% 50%;
 } */
  button,
  button::after {
    padding: 1.5rem 2rem;
    font-size: 3rem;
    font-family: inherit;
    background: linear-gradient(45deg, transparent 5%, ${Colors.primary} 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 1;
    box-shadow: 6px 0px 0px #022124;
    outline: transparent;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 764px) {
      font-size: 2rem;
    }
  }

  button::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "SARDINHA";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #01afff 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  button:hover::after {
    animation: 1s glitch infinite;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;

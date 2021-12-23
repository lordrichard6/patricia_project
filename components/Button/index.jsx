import styled from "styled-components";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import { Headline4 } from "../../assets/variables/typography";

export default function Button({ name, href }) {
  return (
    <div>
      <Link href={href}>
        <AniButton>
          <Headline4 color={Colors.white}>{name}</Headline4>
        </AniButton>
      </Link>
    </div>
  );
}

const AniButton = styled.button`
  margin: 32px 0;
  padding: 16px 32px;
  text-decoration: none;
  position: relative;
  border: none;
  font-family: inherit;
  /* width: 20rem; */
  text-align: center;
  /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); */
  background: linear-gradient(90deg, #085467, #afa7bb, #f4c0b3, #085467);
  background-size: 300%;
  border-radius: 10px;
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
    border-radius: 10px;
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

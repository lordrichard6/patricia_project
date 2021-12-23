import styled from "styled-components";

import { SectionContainer, Colors, TitleMain } from "../../../assets/variables";
import { reasons } from "../../../assets/data/home";
import Reason from "./reason";

export default function WhyChooseUs() {
  return (
    <SectionContainer>
      <TitleMain>“Why choose us”</TitleMain>
      <InnerContainer>
        {reasons.map((item, i) => {
          return (
            <Reason key={i} icon={item.icon} title={item.title} text={item.text} />
          );
        })}
      </InnerContainer>
    </SectionContainer>
  );
}

const InnerContainer = styled.div`
  width: 80vw;
  columns: 3;
  column-gap: 10px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 2024px) {
    /* width: 80vw; */
  }
`;
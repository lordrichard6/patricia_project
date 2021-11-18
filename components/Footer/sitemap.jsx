import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

import { Colors, Title2, NormalText, SmallText } from "../../assets/variables";

export default function Sitemap() {
  return (
    <FooterSection>
      <Title2>Sitemap</Title2>
      <div>
        <LinkScroll className="link" to="header" smooth={true} duration={600}>
          <NormalText>Go to top</NormalText>
        </LinkScroll>
        <LinkScroll className="link" to="about" smooth={true} duration={600}>
          <NormalText>About</NormalText>
        </LinkScroll>
        <LinkScroll className="link" to="services" smooth={true} duration={600}>
          <NormalText>Services</NormalText>
        </LinkScroll>
        <LinkScroll className="link" to="gallery" smooth={true} duration={700}>
          <NormalText>Gallery</NormalText>
        </LinkScroll>
        <LinkScroll className="link" to="form" smooth={true} duration={800}>
          <NormalText>Contact</NormalText>
        </LinkScroll>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }

  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${Colors.secondary};
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

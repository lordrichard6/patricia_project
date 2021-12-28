import styled from "styled-components";

import { Colors } from "../../assets/variables";
import { Headline4, Paragraph } from "../../assets/variables/typography";
import { about } from "../../assets/data/footer";

export default function Right() {
  return (
    <Container>
      <Headline4 color={Colors.white}>{about.title}</Headline4>
      <Paragraph color={Colors.white}>{about.text}</Paragraph>
    </Container>
  );
}

const Container = styled.div``;

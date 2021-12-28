import styled from "styled-components";

import { Colors } from "../../assets/variables";
import { Paragraph } from "../../assets/variables/typography";


export default function Copyright() {
  return (
    <Container>
      <Paragraph>
        Copyright &copy; {new Date().getFullYear()} Sardinha Drive.
      </Paragraph>
      <Paragraph>All rights reserved.</Paragraph>
    </Container>
  );
}

const Container = styled.div`
  color: ${Colors.white};
  width: 100%;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 calc(100% / 10);
`;

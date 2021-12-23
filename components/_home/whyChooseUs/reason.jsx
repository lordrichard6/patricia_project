import styled from "styled-components";

import { Colors } from "../../../assets/variables";

export default function Reason({ icon, title, text }) {
  return (
    <ReasonWrapper>
      {icon}
      <Text>
        <h2>{title}</h2>
        <p>{text}</p>
      </Text>
    </ReasonWrapper>
  );
}

const ReasonWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 1rem 1rem;

  svg {
    font-size: 7rem;
    color: ${Colors.primary};
  }
`;

const Text = styled.div`
  margin-left: 10px;
`;

import styled from "styled-components";

export default function Morph() {
  return (
    <Morphing>
      <div className="word">A</div>
      <div className="word">Chauffeur</div>
      <div className="word">Service</div>
      <div className="word">tailored</div>
      <div className="word">to</div>
      <div className="word">you</div>
    </Morphing>
  );
}

const Morphing = styled.header`
  position: relative;
  font-size: 4rem;
  /* filter: contrast(25) blur(1px); */
`;

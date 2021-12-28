import styled from "styled-components";

import Gallery from '../components/_gallery'


export default function GalleryPage() {
  return (
    <MainContainer>
      <Gallery />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
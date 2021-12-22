import styled from "styled-components";
import Image from "next/image";

import { TitleSmall, Text } from "../../assets/variables";

export default function Passion({ i, classname, image, alt, title, text }) {
  return (
    <HobbyWrapper>
      <div className={classname} key={i}>
        <ImageContainer>
          <Image
            src={image}
            objectFit="cover"
            layout="fill"
            objectPosition="center"
            alt={alt}
          />
        </ImageContainer>
        <TextWrapper>
          <TitleSmall className={classname}>{title}</TitleSmall>
          <Text className={classname}>{text}</Text>
        </TextWrapper>
      </div>
    </HobbyWrapper>
  );
}

const HobbyWrapper = styled.div`
  margin-bottom: 2rem;
  .hobby {
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
  .hobby-reverse {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 25rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  padding: 1rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

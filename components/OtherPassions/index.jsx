import styled from "styled-components";
import Image from "next/image";

import { Colors, Title2, Title3, NormalText } from "../../assets/variables";
import { passions } from '../../assets/data'

export default function OtherPassions() {
  return (
    <SectionContainer>
      <Title2 className="black-font margin-y underline">My Passions</Title2>
      <TitleBreak className="black-font">
        “Hearts beats better and faster we make things we love”
      </TitleBreak>
      <InnerContainer>
        {passions.map((item, index) => {
          return (
            <div className={item.container} key={index}>
              <ImageContainer>
                <Image
                  src={item.imgSrc}
                  objectFit="cover"
                  layout="responsive"
                  objectPosition="center"
                  height={250}
                  width={400}
                  alt={item.alt}
                />
              </ImageContainer>
              <Text>
                <Title3 className={item.classname}>{item.hobbyTitle}</Title3>
                <NormalText className={item.classname}>
                  {item.hobbyText}
                </NormalText>
              </Text>
            </div>
          );
        })}
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .black-font {
    color: ${Colors.dark};
  }
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

const TitleBreak = styled(Title2)`
  text-align: center;
  width: 50%;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const InnerContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 390px) {
    width: 80vw;
  }
  /* @media screen and (max-width: 1024px) {
        width: 60vw;
    } */
  @media screen and (min-width: 1920px) {
    width: 50vw;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 50%;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import picture from '../../assets/images/aboutMe.jpg'

export default function OtherPassions() {
    return (
        <SectionContainer>
            <Title2 className='black-font margin-y underline'>
                My Passions
            </Title2>
            <Title3 className='black-font'>
                Because life doesn't resume to work.
            </Title3>
            <InnerContainer>
                <Hobby>
                    <ImageContainer>
                        <Image src={picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            height={250}
                            width={400}
                            alt='hobby'
                        />
                    </ImageContainer>
                    <Text>
                        <Title3 className='black-font'>Hobby #1</Title3>
                        <NormalText className='black-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                            <br />
                            <br />
                            Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        </NormalText>
                    </Text>
                </Hobby>
                <HobbyReverse>
                    <Text>
                        <Title3 className='black-font'>Hobby #1</Title3>
                        <NormalText className='black-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                            <br />
                            <br />
                            Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        </NormalText>
                    </Text>
                    <ImageContainer>
                        <Image src={picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            height={250}
                            width={400}
                            alt='hobby'
                        />
                    </ImageContainer>
                </HobbyReverse>
                <Hobby>
                    <ImageContainer>
                        <Image src={picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            height={250}
                            width={400}
                            alt='hobby'
                        />
                    </ImageContainer>
                    <Text>
                        <Title3 className='black-font'>Hobby #1</Title3>
                        <NormalText className='black-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                            <br />
                            <br />
                            Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        </NormalText>
                    </Text>
                </Hobby>
                <HobbyReverse>
                    <Text>
                        <Title3 className='black-font'>Hobby #1</Title3>
                        <NormalText className='black-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                            <br />
                            <br />
                            Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        </NormalText>
                    </Text>
                    <ImageContainer>
                        <Image src={picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            height={250}
                            width={400}
                            alt='hobby'
                        />
                    </ImageContainer>
                </HobbyReverse>
            </InnerContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .black-font {
        color: ${Colors.dark}; 
    }
`

const InnerContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    ${media(">largeDesktop")} {
        width: 60vw;
    }
`

const Hobby = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    ${media("<=desktop", ">tablet")} {
        flex-direction: column;
    }
`

const HobbyReverse = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    ${media("<=desktop", ">tablet")} {
        flex-direction: column-reverse;
    }
`

const ImageContainer = styled.div`
    width: 50%;
    padding: 1rem;
`

const Text = styled.div`
    width: 50%;
    padding: 1rem;
`




import styled from 'styled-components'
import Image from 'next/image'

import { Colors, Title2, Title3, NormalText } from '../../assets/variables'
import hobby_01 from '../../assets/images/hobby_01.jpg'
import hobby_02 from '../../assets/images/hobby_02.jpg'
import hobby_03 from '../../assets/images/hobby_03.jpg'

export default function OtherPassions() {
    return (
        <SectionContainer>
            <Title2 className='black-font margin-y underline'>
                My Passions
            </Title2>
            <TitleBreak className='black-font'>
            “Hearts beats better and faster we make things we love”
            </TitleBreak>
            <InnerContainer>
                <Hobby>
                    <ImageContainer>
                        <Image src={hobby_01}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            height={250}
                            width={400}
                            alt='hobby'
                        />
                    </ImageContainer>
                    <Text>
                        <Title3 className='black-font'>Creative writing</Title3>
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
                        <Title3 className='black-font'>Events organization</Title3>
                        <NormalText className='black-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                            <br />
                            <br />
                            Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        </NormalText>
                    </Text>
                    <ImageContainer>
                        <Image src={hobby_02}
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
                        <Image src={hobby_03}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            height={250}
                            width={400}
                            alt='hobby'
                        />
                    </ImageContainer>
                    <Text>
                        <Title3 className='black-font'>Helping animals cause</Title3>
                        <NormalText className='black-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                            <br />
                            <br />
                            Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        </NormalText>
                    </Text>
                </Hobby>
                {/* <HobbyReverse>
                    <Text>
                        <Title3 className='black-font'>Hobby #4</Title3>
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
                </HobbyReverse> */}
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

const TitleBreak = styled(Title2)`
    text-align: center;
    width: 50%;
    padding: 1rem;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`

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
`

const Hobby = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin-bottom: 1rem;
    }
`

const HobbyReverse = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`

const ImageContainer = styled.div`
    width: 50%;
    padding: 1rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

const Text = styled.div`
    width: 50%;
    padding: 1rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`




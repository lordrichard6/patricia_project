import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import background from '../../assets/images/form.jpg'
import pattern from '../../assets/images/pattern.png'

export default function Form() {
    return (
        <SectionContainer id="form">
            <Background src={background} layout="fill" objectFit='cover' />
            <FormContainer>
                <BG src={pattern}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='pattern'
                />
                <Title2 className='underline'>Book a Service Now</Title2>
                <NormalText>Please fill the form below</NormalText>
                <form>
                    <input
                        type="text"
                        name="name"
                        // value='Name'
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="number"
                        // value='Phone Number'
                        placeholder="Phone Number"
                    />
                    <input
                        type="email"
                        name="email"
                        // value='Email'
                        placeholder="Email"
                    />
                    <textarea
                        name="message"
                        // value='Message'
                        placeholder="Message"
                    />
                </form>
            </FormContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div` 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    .underline {
        text-decoration: underline;
    }
`

const Background = styled(Image)`
    z-index: -1;
`

const BG = styled(Image)`
    z-index: 1;
    opacity: 0.1;
`

const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 80%;
    background: ${Colors.primary};
    opacity: 0.9;
    border-radius: 5px;
    ${media("<=tablet")} {
        width: 90%;
        height: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    /* h1, h3 {
        z-index: 2;
        color: #eee;
        font-weight: 600;
        margin: 0;
        margin-bottom: 10px;
    } */
    form {
        z-index: 2;
        display: flex;
        flex-direction: column;
        width: 70%;
        color: ${Colors.dark};
        font-size: 24px;
        input {
            width: 400px;
            height: 60px;
            background: #eee;
            border-radius: 5px;
            border: 0;
            margin-top: 5px;
            margin-bottom: 5px;
            padding: 10px;
            font-size: 24px;
        }
        textarea {
            width: 400px;
            background: #eee;
            border-radius: 5px;
            border: 0;
            margin-top: 5px;
            /* margin-bottom: 10px; */
            padding: 10px;
            min-height: 200px;
            font-size: 24px;
        }
    }
`
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
    width: 100%;
    min-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ${media("<=tablet")} {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }
    ${media("<=desktop", ">tablet")} {
        padding-bottom: 6rem;
        padding-top: 6rem;  
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
    width: 45%;
    min-height: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${Colors.primary};
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    ${media("<=tablet")} {
        width: 90%;
        height: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    form {
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        color: ${Colors.dark};
        margin-top: 2rem;

        input {
            width: 95%;
            height: 60px;
            background: #eee;
            border-radius: 5px;
            border: 0;
            margin-top: 5px;
            margin-bottom: 5px;
            padding: 10px;
            font-size: 20px;

            ${media("<=tablet")} {
                width: 90%;
                height: 40px;
                font-size: 16px;
            }
        }
        textarea {
            width: 95%;
            background: #eee;
            border-radius: 5px;
            border: 0;
            margin-top: 5px;
            padding: 10px;
            min-height: 200px;
            font-size: 20px;
            ${media("<=tablet")} {
                width: 90%;
                font-size: 16px;
            }
        }
    }
`
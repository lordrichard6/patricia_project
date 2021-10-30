import styled from 'styled-components'
import Image from 'next/image'

import pic from '../../assets/images/image_01.jpg'
import pattern from '../../assets/images/pattern.png'

export default function Form() {
    return (
        <SectionContainer>
            <Background src={pic} layout="fill" objectFit='cover' />
            <FormContainer>
                <BG src={pattern}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                />
                <h1>Book a Service Now</h1>
                <h3>Please fill the form below</h3>
                <form>
                    <input
                        type="text"
                        name="name"
                        value='Name'
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="number"
                        value='Phone Number'
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value='Email'
                        placeholder="Email"
                    />
                    <textarea
                        name="message"
                        value='Message'
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
    width: 30%;
    height: 80%;
    background: #062942;
    border-radius: 5px;
    h1, h3 {
        z-index: 2;
        color: #eee;
        font-weight: 600;
        margin: 0;
        margin-bottom: 10px;
    }
    form {
        z-index: 2;
        display: flex;
        flex-direction: column;
        width: 70%;
        color: #212121;
        input {
            background: #eee;
            border-radius: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            padding: 10px;
        }
        textarea {
            background: #eee;
            border-radius: 5px;
            border: 0;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 10px;
            min-height: 100px;
        }
    }
`
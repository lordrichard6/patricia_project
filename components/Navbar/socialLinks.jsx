import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare, faTwitterSquare, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem><Link href="https://www.instagram.com/patriciavilanova93/"><Icon icon={faInstagram} /></Link></LinkItem>
                <LinkItem><Link href="https://www.facebook.com//vilanova.patricia/"><Icon icon={faFacebookSquare} /></Link></LinkItem>
                <LinkItem><Link href="https://twitter.com/patriciavilano5/"><Icon icon={faTwitterSquare} /></Link></LinkItem>
                <LinkItem><Link href="https://www.linkedin.com/in/patr%C3%ADcia-vila-nova-b22200b5/"><Icon icon={faLinkedin} /></Link></LinkItem>
                <LinkItem><Link href="https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA"><Icon icon={faYoutubeSquare} /></Link></LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
}

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
        border-bottom: 2px solid #9b59b6;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`

const Icon = styled(FontAwesomeIcon)`
    color: #fff;
    width: 35px;
`
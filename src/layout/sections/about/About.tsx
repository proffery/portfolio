import styled from "styled-components"
import aboutMap from "../../../assets/images/Map.webp"
import photo from "../../../assets/images/Photo2.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import { Icon } from "../../../components/icon/Icon"
import { DecorationDot } from "../../../components/decoration/DecorationDot"

export const About = () => {
    return (
        <StyledAbout>
            <Photo src={photo} alt="Photography" />
            <StyledAboutMe direction="column" align="center" wrap="wrap" justify="center">
            <StyledLinks align="center" >
                <Link href="#">
                    <Icon iconId="aboutWhatsapp" />
                </Link>
                <Link href="#">
                    <Icon iconId="aboutInstagram" width="30px"/>
                </Link>
                <Link href="#">
                    <Icon iconId="aboutTelegram" width="46px" viewBox="-4 -2 37 35" />
                </Link>
            </StyledLinks>
            <FlexWrapper direction="column" align="flex-start" wrap="wrap">
                <h2>I’m Dmitry&nbsp;</h2>
                <h2><Link href="#">Shamko</Link></h2>
                <StyledList>
                    <li>I was born in Belarus</li>
                    <li>I’m 36 years old</li>
                    <li>I have started my interest in this field from 2022</li>
                    <li>I’m designer , video editor , web developer and ...</li>
                    <li>My phone number in Iran +989212073348</li>
                </StyledList>
            </FlexWrapper>
            </StyledAboutMe>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d3daee;
    height: 100vh;
    background-image: url(${aboutMap});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    overflow: hidden;
`

const Photo = styled.img`
    position: relative;
    height: 60%;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    filter: grayscale(70%)
`

const StyledAboutMe = styled(FlexWrapper)`
    position: relative;
    top: -50%;
    left: -20%;
    background-color: lightblue;
    border-radius: 75px 0;
    min-width: 250px;
    padding: 30px;
    padding-top: 10px;
    margin-left: 30px;
`

const StyledLinks = styled(FlexWrapper)`
    align-self: flex-end;
`

const StyledList = styled.ul`
    padding-left: 20px;
    li::marker {
        font-size: 25px;
        color: rgba(33, 87, 242, 1);
    }
`
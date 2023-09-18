import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo.webp'
import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { DecorationCross } from "../../../components/decoration/DecorationCross"
import { DecorationZero } from "../../../components/decoration/DecorationZero"
import photoshop from '../../../assets/images/icon-photoshop.png'
import illustrator from '../../../assets/images/icon-llustrator.png'
import afterEffect from '../../../assets/images/icon-after-effects.png'
import figma from '../../../assets/images/icon-figma.png'
import { Link } from "../../../components/link/Link.styled"


export const Main = () => {
    return (
        <StyledMain direction="column" align="center" gap="50px">
            <DecorationCross positionLeft="40%" positionTop="2%" />
            <DecorationZero positionLeft="75%" positionTop="40%"/>
            <MainBannerWrapper align="center" wrap="wrap" justify="center" width="70%" gap="25px">
                <FlexWrapper align="center" justify="center" width="50%">
                    <MainPhoto src={photo} alt="Photography" />
                </FlexWrapper>
                <FlexWrapper direction="column" width="46%" gap="30px">
                    <FlexWrapper wrap="wrap">
                        <h2>I’m Dmitry&nbsp;</h2>
                        <h2><Link href="#">Shamko</Link></h2>
                    </FlexWrapper>
                    <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</p>
                    <FlexWrapper align="center" justify="center" gap="28px">
                        <Link type="button" color="white" background="blue" borderRadius="20px" padding="5px 20px">See Projects
                            <Icon viewBox="-8 -5 37 35" iconId="arrowRight"/>
                        </Link>
                        <Link href="#">Download Resume</Link>
                    </FlexWrapper>
                </FlexWrapper>
            </MainBannerWrapper>
            <FlexWrapper justify="center" wrap="wrap" gap="12px">
                <MainApps>
                    <MainAppsIcon src={photoshop} />
                </MainApps>
                <MainApps>
                    <MainAppsIcon src={illustrator} />
                </MainApps>
                <MainApps>
                    <MainAppsIcon src={afterEffect} />
                </MainApps>
                <MainApps>
                    <MainAppsIcon src={figma} />
                </MainApps>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled(FlexWrapper)`
    /* min-height: 100vh; */
`

const MainPhoto = styled.img`
    display: flex;
    max-width: 300px;
    min-width: 188px;
    height: auto;
    border-radius: 50% 50%;
    border: 15px solid white;
    object-fit: cover;
`
const MainApps = styled.div`
    display: flex;
    min-width: 160px;
    height: 90px;
    border-radius: 24px;
    background-color: bisque;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`
const MainAppsIcon = styled.img`
    position: relative;
    top: -50%;
    border: 10px solid white;
    border-radius: 50% 50%;
`
const MainBannerWrapper = styled(FlexWrapper)`
    background-color: lightblue;
    border-radius: 150px 0;
    min-width: 400px;
    padding: 30px;
    margin-top: 50px;
`

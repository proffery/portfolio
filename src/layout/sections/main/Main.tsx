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


export const Main = () => {
    return (
        <FlexWrapper direction="column" align="center" justify="center" gap="50px">
            <DecorationCross positionLeft="40%" positionTop="2%" />
            <DecorationZero positionLeft="77%" positionTop="48%"/>
            <MainLogoWrapper align="center" wrap="wrap" justify="center" width="70%" gap="30px">
                <FlexWrapper align="center" justify="center" width="50%">
                    <Photo src={photo} alt="Photography" />
                </FlexWrapper>
                <FlexWrapper direction="column" width="46%" gap="30px">
                    <h2>I’m Dmitry
                        <a href="#">Shamko</a>
                    </h2>
                    <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</p>
                    <div>
                        <button>See Projects
                            <Icon iconId="arrowRight"/>
                        </button>
                        <a href="#">Download Resume</a>
                    </div>
                </FlexWrapper>
            </MainLogoWrapper>
            <FlexWrapper justify="center" wrap="wrap" gap="12px">
                <Apps>
                    <AppsIcon src={photoshop} />
                </Apps>
                <Apps>
                    <AppsIcon src={illustrator} />
                </Apps>
                <Apps>
                    <AppsIcon src={afterEffect} />
                </Apps>
                <Apps>
                    <AppsIcon src={figma} />
                </Apps>
            </FlexWrapper>
        </FlexWrapper>
    )
}

const Photo = styled.img`
    display: flex;
    max-width: 400px;
    min-width: 188px;
    height: auto;
    border-radius: 50% 50%;
    border: 25px solid white;
    object-fit: cover;
`
const Apps = styled.div`
    display: flex;
    min-width: 160px;
    height: 90px;
    border-radius: 24px;
    background-color: bisque;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`
const AppsIcon = styled.img`
    position: relative;
    top: -50%;
    border: 10px solid white;
    border-radius: 50% 50%;
`
const MainLogoWrapper = styled(FlexWrapper)`
    background-color: lightblue;
    border-radius: 150px 0;
    padding: 30px;
    margin-top: 50px;
`
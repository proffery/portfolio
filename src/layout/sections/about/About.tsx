import { useContext, useEffect, useState } from "react"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link.styled"
import { ThemeContext } from "../../../context/ThemeContext"
import { S } from "./About_Styles"

export const About = () => {
    const theme = useContext(ThemeContext)
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    
    return (
        <S.About theme={theme} id="about">
            <S.AboutContainer theme={theme} direction="column" >
            {width > breakpoint && <SectionTitle theme={theme} color="white">About me</SectionTitle>}
                    <S.AboutBanner theme={theme} direction="column" align="center" wrap="wrap" justify="center">
                        <S.SocialLinksWrapper align="center" >
                            <Link href="https://github.com/proffery" aria-label="GitHub page link">
                                <Icon iconId="gitHub" height="50px" width="50px" viewBox="-90 -60 260 260" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/dmitryshamko/" aria-label="LinkedIn account" >
                                <Icon iconId="linkedIn" width="30px" viewBox="-25 -12 158 158"/>
                            </Link>
                            <Link href="https://t.me/ShamkoDmitry" aria-label="Telegram link" >
                                <Icon iconId="aboutTelegram" width="46px" viewBox="-4 0 35 35" />
                            </Link>
                        </S.SocialLinksWrapper>
                            <FlexWrapper direction="column" align="flex-start" wrap="wrap" >
                                <S.AboutBannerTitle>I’m&nbsp;</S.AboutBannerTitle>
                                <S.AboutBannerTitle><Link href="#contact">Dmitry Shamko</Link></S.AboutBannerTitle>
                                <S.AboutBannerList theme={theme}>
                                    <li>I was born in Belarus</li>
                                    <li>I’m 36 years old</li>
                                    <li>I have started my interest in this field from 2022</li>
                                    <li>I’m web developer</li>
                                    <li>My phone number +375256979075</li>
                                </S.AboutBannerList>
                            </FlexWrapper>
                    </S.AboutBanner>
            </S.AboutContainer>
            </S.About>
    )
}